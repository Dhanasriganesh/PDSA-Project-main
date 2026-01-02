import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import multer from 'multer';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

// Ensure uploads directory exists
const uploadsDir = join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure nodemailer
const createTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

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

// In-memory storage for contact submissions (in production, use a database)
let contactSubmissions = [];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'PDSA TECH API is running' });
});

// Contact form submission - handles multipart/form-data
app.post('/api/contact', upload.single('file'), async (req, res) => {
  try {
    const { name, email, mobile, company, topic, message } = req.body;
    const file = req.file;

    // Validate required fields
    if (!name || !email || !topic) {
      // Clean up file if validation fails
      if (file && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Topic).',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (file && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    // Validate topic
    const validTopics = ['strategy', 'platforms', 'ai', 'careers', 'media'];
    if (!validTopics.includes(topic)) {
      if (file && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      return res.status(400).json({
        success: false,
        error: 'Please select a valid topic.',
      });
    }

    // Validate file type if file is provided
    if (file) {
      const allowedExtensions = ['.pdf', '.doc', '.docx', '.zip', '.ppt', '.pptx'];
      const fileExtension = '.' + file.originalname.split('.').pop().toLowerCase();
      
      if (!allowedExtensions.includes(fileExtension)) {
        fs.unlinkSync(file.path);
        return res.status(400).json({
          success: false,
          error: 'Invalid file type. Allowed types: PDF, DOC, DOCX, ZIP, PPT, PPTX',
        });
      }
    }

    // Create contact submission object
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      mobile: mobile || '',
      company: company || '',
      topic,
      message: message || '',
      hasFile: !!file,
      timestamp: new Date().toISOString(),
    };

    // Store submission
    contactSubmissions.push(submission);

    // Send email notification
    const transporter = createTransporter();
    if (transporter) {
      try {
        const topicLabel = getTopicLabel(topic);
        const mailOptions = {
          from: `"PDSA Technology Contact" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
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
                ${message ? `<p style="margin: 10px 0;"><strong style="color: #1e293b;">Message:</strong><br><div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">${message}</div></p>` : ''}
                ${file ? `<p style="margin: 10px 0;"><strong style="color: #1e293b;">File attached:</strong> Yes (${file.originalname})</p>` : ''}
              </div>
              
              <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
                This email was sent from the PDSA Technology contact form.
              </p>
            </div>
          `,
          attachments: file ? [{
            filename: file.originalname,
            path: file.path,
          }] : [],
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails
      }
    }

    // Clean up file after sending email
    if (file && fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }

    res.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Clean up file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
    });
  }
});

// Get all contact submissions (for admin - in production, add authentication)
app.get('/api/contact/submissions', (req, res) => {
  res.json({
    success: true,
    count: contactSubmissions.length,
    submissions: contactSubmissions,
  });
});

// Newsletter subscription (optional endpoint)
app.post('/api/newsletter', (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    // In production, store in database
    console.log('Newsletter subscription:', email);

    res.json({
      success: true,
      message: 'Thank you for subscribing to our newsletter!',
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.',
    });
  }
});

// Career application submission - handles multipart/form-data
app.post('/api/careers/apply', upload.single('file'), async (req, res) => {
  try {
    const { name, email, mobile, role, message } = req.body;
    const file = req.file;

    // Validate required fields
    if (!name || !email || !role) {
      // Clean up file if validation fails
      if (file && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields.',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (file && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    // Validate file type if file is provided
    if (file) {
      const allowedExtensions = ['.pdf', '.doc', '.docx', '.zip'];
      const fileExtension = '.' + file.originalname.split('.').pop().toLowerCase();
      
      if (!allowedExtensions.includes(fileExtension)) {
        fs.unlinkSync(file.path);
        return res.status(400).json({
          success: false,
          error: 'Invalid file type. Allowed types: PDF, DOC, DOCX, ZIP',
        });
      }
    }

    // Send email notification
    const transporter = createTransporter();
    if (transporter) {
      try {
        const mailOptions = {
          from: `"PDSA Technology Careers" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
          subject: `New Career Application: ${role} - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563EB; border-bottom: 2px solid #2563EB; padding-bottom: 10px;">
                New Career Application
              </h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${email}" style="color: #2563EB;">${email}</a></p>
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Mobile:</strong> ${mobile || 'Not provided'}</p>
                <p style="margin: 10px 0;"><strong style="color: #1e293b;">Role of Interest:</strong> ${role}</p>
                ${message ? `<p style="margin: 10px 0;"><strong style="color: #1e293b;">Message:</strong><br><div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">${message}</div></p>` : ''}
                ${file ? `<p style="margin: 10px 0;"><strong style="color: #1e293b;">Resume attached:</strong> Yes (${file.originalname})</p>` : ''}
              </div>
              
              <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
                This email was sent from the PDSA Technology careers application form.
              </p>
            </div>
          `,
          attachments: file ? [{
            filename: file.originalname,
            path: file.path,
          }] : [],
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails
      }
    }

    // Clean up file after sending email
    if (file && fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }

    res.json({
      success: true,
      message: 'Application submitted successfully!',
    });
  } catch (error) {
    console.error('Error processing career application:', error);
    
    // Clean up file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({
      success: false,
      error: 'Failed to send application. Please try again later.',
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 PDSA TECH Backend API server running on http://localhost:${PORT}`);
  console.log(`📧 Email notifications: ${process.env.SMTP_USER ? 'Enabled' : 'Disabled (configure SMTP_USER and SMTP_PASS in .env)'}`);
});
