import nodemailer from 'nodemailer';
import busboy from 'busboy';
import fs from 'fs';
import path from 'path';

// Create transporter
const createTransporter = () => {
  const gmailUser = process.env.GMAIL_USER || 'tejaannangi1996@gmail.com';
  const gmailPass = process.env.GMAIL_APP_PASSWORD || 'zmnxembklkfmwrox';
  
  if (!gmailUser || !gmailPass) {
    console.warn('Gmail credentials not configured');
    return null;
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });
};

// Topic labels mapping
const topicLabels = {
  strategy: 'Strategy / innovation',
  platforms: 'Platforms / engineering',
  ai: 'AI & automation',
  careers: 'Careers',
  media: 'Media / partnerships',
};

// Helper function to parse multipart form data using busboy
function parseForm(req) {
  return new Promise((resolve, reject) => {
    const fields = {};
    const files = {};
    let fileCount = 0;
    let finishedFiles = 0;
    let hasError = false;

    try {
      // Check if request is readable
      if (!req || typeof req.pipe !== 'function') {
        return reject(new Error('Request is not a readable stream'));
      }

      // Ensure upload directory exists
      const uploadDir = '/tmp';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const bb = busboy({ 
        headers: req.headers,
        limits: {
          fileSize: 10 * 1024 * 1024, // 10MB limit
        }
      });

      bb.on('field', (name, value) => {
        if (hasError) return;
        try {
          if (fields[name]) {
            if (Array.isArray(fields[name])) {
              fields[name].push(value);
            } else {
              fields[name] = [fields[name], value];
            }
          } else {
            fields[name] = value;
          }
        } catch (err) {
          console.error('Error processing field:', err);
        }
      });

      bb.on('file', (name, file, info) => {
        if (hasError) {
          file.resume(); // Drain the file stream
          return;
        }

        try {
          fileCount++;
          const { filename, encoding, mimeType } = info;
          const safeFilename = filename || 'file';
          const filepath = path.join(uploadDir, `${Date.now()}-${Math.random().toString(36).substring(7)}-${safeFilename}`);
          const writeStream = fs.createWriteStream(filepath);

          file.pipe(writeStream);

          writeStream.on('close', () => {
            finishedFiles++;
            files[name] = {
              filename: safeFilename,
              filepath: filepath,
              mimetype: mimeType,
            };
            
            // Check if all files are done
            if (finishedFiles === fileCount && !hasError) {
              // This will be handled by the 'finish' event
            }
          });

          writeStream.on('error', (err) => {
            console.error('File write error:', err);
            hasError = true;
            file.resume(); // Drain the file stream
            if (fs.existsSync(filepath)) {
              try {
                fs.unlinkSync(filepath);
              } catch (e) {
                console.error('Error deleting file on write error:', e);
              }
            }
            reject(err);
          });

          file.on('error', (err) => {
            console.error('File stream error:', err);
            hasError = true;
            if (fs.existsSync(filepath)) {
              try {
                fs.unlinkSync(filepath);
              } catch (e) {
                console.error('Error deleting file on stream error:', e);
              }
            }
            reject(err);
          });
        } catch (err) {
          console.error('Error setting up file handler:', err);
          hasError = true;
          file.resume(); // Drain the file stream
          reject(err);
        }
      });

      bb.on('finish', () => {
        if (!hasError) {
          resolve({ fields, files });
        }
      });

      bb.on('error', (err) => {
        console.error('Busboy error:', err);
        hasError = true;
        reject(err);
      });

      // Set a timeout to prevent hanging
      const timeout = setTimeout(() => {
        if (!hasError) {
          hasError = true;
          reject(new Error('Request timeout: Form parsing took too long'));
        }
      }, 25000); // 25 seconds

      // Pipe request to busboy
      req.pipe(bb);

      // Clear timeout on finish
      bb.once('finish', () => {
        clearTimeout(timeout);
      });

      bb.once('error', () => {
        clearTimeout(timeout);
      });
    } catch (error) {
      console.error('Error in parseForm setup:', error);
      hasError = true;
      reject(error);
    }
  });
}

// Contact form email template
const createContactEmailTemplate = (data) => {
  const { name, email, mobile, company, topic, message, fileName } = data;
  const topicLabel = topicLabels[topic] || topic;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - PDSA Technology</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .email-container {
                background-color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #2563EB;
                padding-bottom: 20px;
            }
            .header h1 {
                color: #2563EB;
                margin: 0;
                font-size: 24px;
            }
            .content {
                margin-bottom: 25px;
            }
            .form-details {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
            }
            .detail-row {
                margin: 15px 0;
                padding-bottom: 15px;
                border-bottom: 1px solid #e0e0e0;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .label {
                color: #555;
                font-weight: 600;
                display: block;
                margin-bottom: 5px;
            }
            .value {
                color: #333;
                font-size: 16px;
            }
            .message-box {
                background-color: #ffffff;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #2563EB;
                margin-top: 10px;
                white-space: pre-wrap;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                color: #666;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
            </div>
            
            <div class="content">
                <p>You have received a new contact form submission from your website.</p>
                
                <div class="form-details">
                    <div class="detail-row">
                        <span class="label">Name:</span>
                        <span class="value">${name}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Email:</span>
                        <span class="value"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Mobile:</span>
                        <span class="value">${mobile || 'Not provided'}</span>
                    </div>
                    
                    ${company ? `
                    <div class="detail-row">
                        <span class="label">Company:</span>
                        <span class="value">${company}</span>
                    </div>
                    ` : ''}
                    
                    <div class="detail-row">
                        <span class="label">Topic:</span>
                        <span class="value">${topicLabel}</span>
                    </div>
                    
                    ${message ? `
                    <div class="detail-row">
                        <span class="label">Message:</span>
                        <div class="message-box">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                    </div>
                    ` : ''}
                    
                    ${fileName ? `
                    <div class="detail-row">
                        <span class="label">File Attached:</span>
                        <span class="value">${fileName}</span>
                    </div>
                    ` : ''}
                </div>
                
                <p style="margin-top: 20px;">Please respond to this inquiry at your earliest convenience.</p>
            </div>
            
            <div class="footer">
                <p><strong>PDSA Technology</strong></p>
                <p>This email was sent from the contact form on your website.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export default async (req, res) => {
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
    // Log request info for debugging
    console.log('Request method:', req.method);
    console.log('Content-Type:', req.headers['content-type']);
    
    // Parse multipart form data
    const { fields, files } = await parseForm(req);
    
    console.log('Parsed fields:', Object.keys(fields));
    console.log('Parsed files:', files ? Object.keys(files) : 'none');

    // Extract form fields
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const mobile = Array.isArray(fields.mobile) ? fields.mobile[0] : fields.mobile;
    const company = Array.isArray(fields.company) ? fields.company[0] : fields.company || '';
    const topic = Array.isArray(fields.topic) ? fields.topic[0] : fields.topic;
    const message = Array.isArray(fields.message) ? fields.message[0] : fields.message || '';

    // Handle file attachment
    const file = files.file;
    if (file) {
      // Validate file type
      const allowedExtensions = ['.pdf', '.doc', '.docx', '.zip', '.ppt', '.pptx'];
      const fileExtension = '.' + (file.filename || '').split('.').pop().toLowerCase();
      
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
        filename: file.filename || 'attachment',
        path: file.filepath,
      };
    }

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

    // Validate topic is not empty (already validated above, but ensure it's a string)
    if (!topic || typeof topic !== 'string' || topic.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a topic.',
      });
    }

    // Use topic directly (no need for label mapping since it's now a free text field)
    const topicLabel = topic.trim();

    // Check if email service is configured
    const transporter = createTransporter();
    if (transporter) {
      try {
        // Prepare email content
        const gmailUser = process.env.GMAIL_USER || 'tejaannangi1996@gmail.com';
        const mailTo = process.env.MAIL_TO || 'groupartihcus@gmail.com';
        const mailOptions = {
          from: `"PDSA Technology Contact" <${gmailUser}>`,
          to: mailTo,
          subject: `New Contact Form: ${topicLabel} - ${name}`,
          html: createContactEmailTemplate({
            name,
            email,
            mobile: mobile || '',
            company: company || '',
            topic,
            message: message || '',
            fileName: fileAttachment ? fileAttachment.filename : null,
          }),
          attachments: fileAttachment && fileAttachment.path && fs.existsSync(fileAttachment.path) 
            ? [fileAttachment]
            : [],
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Contact form email sent successfully');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails - still return success
      }

      // Clean up file after sending email
      if (fileAttachment && fileAttachment.path && fs.existsSync(fileAttachment.path)) {
        try {
          fs.unlinkSync(fileAttachment.path);
        } catch (e) {
          console.error('Error cleaning up file:', e);
        }
      }
    } else {
      console.warn('Email service not configured - skipping email send');
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    if (error.stack) {
      console.error('Error stack:', error.stack);
    }
    
    // Clean up any uploaded files on error
    if (fileAttachment && fileAttachment.path && fs.existsSync(fileAttachment.path)) {
      try {
        fs.unlinkSync(fileAttachment.path);
      } catch (e) {
        console.error('Error cleaning up file on error:', e);
      }
    }
    
    // Return a more detailed error in development, generic in production
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? error.message || 'Failed to send message. Please try again later.'
      : 'Failed to send message. Please try again later.';
    
    return res.status(500).json({
      success: false,
      error: errorMessage,
    });
  }
};

