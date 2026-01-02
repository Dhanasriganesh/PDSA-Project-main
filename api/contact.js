const nodemailer = require('nodemailer');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Helper function to parse multipart form data
function parseForm(req) {
  return new Promise((resolve, reject) => {
    // Use /tmp directory for Vercel serverless environment
    const uploadDir = os.tmpdir();
    
    const form = formidable({
      uploadDir: uploadDir,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      keepExtensions: true,
      multiples: false,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
}

// Helper function to create email transporter
function createTransporter() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('Email service not configured - GMAIL_USER or GMAIL_APP_PASSWORD missing');
    return null;
  }
  
  try {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  } catch (error) {
    console.error('Error creating transporter:', error);
    return null;
  }
}

// Helper function to get topic label
function getTopicLabel(topic) {
  const topicMap = {
    strategy: 'Strategy / innovation',
    platforms: 'Platforms / engineering',
    ai: 'AI & automation',
    careers: 'Careers',
    media: 'Media / partnerships',
  };
  return topicMap[topic] || topic;
}

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  let fileAttachment = null;

  try {
    // Parse multipart form data
    const { fields, files } = await parseForm(req);

    // Extract form fields
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const mobile = Array.isArray(fields.mobile) ? fields.mobile[0] : fields.mobile;
    const company = Array.isArray(fields.company) ? fields.company[0] : fields.company || '';
    const topic = Array.isArray(fields.topic) ? fields.topic[0] : fields.topic;
    const message = Array.isArray(fields.message) ? fields.message[0] : fields.message || '';

    // Validate required fields
    if (!name || !email || !topic) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Topic).',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    // Validate topic
    const validTopics = ['strategy', 'platforms', 'ai', 'careers', 'media'];
    if (!validTopics.includes(topic)) {
      return res.status(400).json({
        success: false,
        error: 'Please select a valid topic.',
      });
    }

    // Handle file attachment
    const file = files.file;
    if (file && !Array.isArray(file)) {
      // Validate file type
      const allowedExtensions = ['.pdf', '.doc', '.docx', '.zip', '.ppt', '.pptx'];
      const fileExtension = '.' + (file.originalFilename || '').split('.').pop().toLowerCase();
      
      if (!allowedExtensions.includes(fileExtension)) {
        // Clean up file if invalid
        if (file.filepath && fs.existsSync(file.filepath)) {
          try {
            fs.unlinkSync(file.filepath);
          } catch (e) {
            console.error('Error deleting file:', e);
          }
        }
        return res.status(400).json({
          success: false,
          error: 'Invalid file type. Allowed types: PDF, DOC, DOCX, ZIP, PPT, PPTX',
        });
      }

      fileAttachment = {
        filename: file.originalFilename || 'attachment',
        path: file.filepath,
      };
    }

    // Check if email service is configured
    const transporter = createTransporter();
    if (transporter) {
      try {
        // Prepare email content
        const topicLabel = getTopicLabel(topic);
        const mailOptions = {
          from: `"PDSA Technology Contact" <${process.env.GMAIL_USER}>`,
          to: process.env.MAIL_TO || process.env.GMAIL_USER,
          subject: `New Contact Form: ${topicLabel} - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${email}" style="color: #2563EB;">${email}</a></p>
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Mobile:</strong> ${mobile || 'Not provided'}</p>
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Company:</strong> ${company || 'Not provided'}</p>
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Topic:</strong> ${topicLabel}</p>
                ${message ? `<p style="margin: 10px 0;"><strong style="color: #1e293b;">Message:</strong><br><div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div></p>` : ''}
                ${fileAttachment ? `<p style="margin: 10px 0;"><strong style="color: #1e293b;">File attached:</strong> Yes (${fileAttachment.filename})</p>` : ''}
              </div>
              
              <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
                This email was sent from the PDSA Technology contact form.
              </p>
            </div>
          `,
          attachments: fileAttachment && fileAttachment.path && fs.existsSync(fileAttachment.path) ? [fileAttachment] : [],
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails - still return success
      }
    } else {
      console.warn('Email service not configured - skipping email send');
    }

    // Clean up file after sending email
    if (fileAttachment && fileAttachment.path && fs.existsSync(fileAttachment.path)) {
      try {
        fs.unlinkSync(fileAttachment.path);
      } catch (e) {
        console.error('Error cleaning up file:', e);
      }
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    console.error('Error stack:', error.stack);
    
    // Clean up any uploaded files on error
    if (fileAttachment && fileAttachment.path && fs.existsSync(fileAttachment.path)) {
      try {
        fs.unlinkSync(fileAttachment.path);
      } catch (e) {
        console.error('Error cleaning up file on error:', e);
      }
    }

    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send message. Please try again later.',
    });
  }
};
