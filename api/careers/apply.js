const nodemailer = require('nodemailer');
const formidable = require('formidable');
const fs = require('fs');
const os = require('os');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tejaannangi1996@gmail.com',
      pass: 'zmnxembklkfmwrox', // App password
    },
  });
};

// Helper function to parse multipart form data
function parseForm(req) {
  return new Promise((resolve, reject) => {
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

// Career application email template
const createCareerEmailTemplate = (data) => {
  const { name, email, mobile, role, message, fileName } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Career Application - PDSA Technology</title>
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
                <h1>New Career Application</h1>
            </div>
            
            <div class="content">
                <p>You have received a new career application from your website.</p>
                
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
                    
                    <div class="detail-row">
                        <span class="label">Role of Interest:</span>
                        <span class="value">${role}</span>
                    </div>
                    
                    ${message ? `
                    <div class="detail-row">
                        <span class="label">Message:</span>
                        <div class="message-box">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                    </div>
                    ` : ''}
                    
                    ${fileName ? `
                    <div class="detail-row">
                        <span class="label">Resume Attached:</span>
                        <span class="value">${fileName}</span>
                    </div>
                    ` : ''}
                </div>
                
                <p style="margin-top: 20px;">Please review this application and respond to the candidate at your earliest convenience.</p>
            </div>
            
            <div class="footer">
                <p><strong>PDSA Technology</strong></p>
                <p>This email was sent from the career application form on your website.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

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
    const role = Array.isArray(fields.role) ? fields.role[0] : fields.role;
    const message = Array.isArray(fields.message) ? fields.message[0] : fields.message || '';

    // Validate required fields
    if (!name || !email || !role) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Role of Interest).',
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

    // Handle file attachment
    const file = files.file;
    if (file && !Array.isArray(file)) {
      // Validate file type
      const allowedExtensions = ['.pdf', '.doc', '.docx', '.zip'];
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
          error: 'Invalid file type. Allowed types: PDF, DOC, DOCX, ZIP',
        });
      }

      fileAttachment = {
        filename: file.originalFilename || 'resume',
        path: file.filepath,
      };
    }

    // Send email
    const transporter = createTransporter();
    if (transporter) {
      try {
        const mailOptions = {
          from: '"PDSA Technology Careers" <tejaannangi1996@gmail.com>',
          to: 'groupartihcus@gmail.com',
          subject: `New Career Application: ${role} - ${name}`,
          html: createCareerEmailTemplate({
            name,
            email,
            mobile: mobile || '',
            role,
            message: message || '',
            fileName: fileAttachment ? fileAttachment.filename : null,
          }),
          attachments: fileAttachment && fileAttachment.path && fs.existsSync(fileAttachment.path) 
            ? [fileAttachment]
            : [],
        };

        await transporter.sendMail(mailOptions);
        console.log('Career application email sent successfully');
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
      message: 'Application submitted successfully!',
    });
  } catch (error) {
    console.error('Error processing career application:', error);
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
      error: error.message || 'Failed to send application. Please try again later.',
    });
  }
};

