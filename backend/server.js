import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
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

// Configure nodemailer (you'll need to set up email credentials in .env)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// In-memory storage for contact submissions (in production, use a database)
let contactSubmissions = [];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'TetraX AI API is running' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields',
      });
    }

    // Create contact submission object
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      subject,
      message,
      timestamp: new Date().toISOString(),
    };

    // Store submission
    contactSubmissions.push(submission);

    // Send email notification (optional - only if email is configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const mailOptions = {
          from: process.env.SMTP_USER,
          to: process.env.CONTACT_EMAIL || 'career@tetraxai.com',
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails
      }
    }

    res.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      submissionId: submission.id,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
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

// Career application submission (optional endpoint)
app.post('/api/career/apply', async (req, res) => {
  try {
    const { name, email, phone, position, coverLetter, resume } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields',
      });
    }

    // In production, store in database and handle file uploads
    console.log('Career application received:', { name, email, position });

    res.json({
      success: true,
      message: 'Thank you for your application! We will review it and get back to you soon.',
    });
  } catch (error) {
    console.error('Error processing career application:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your application. Please try again later.',
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 TetraX AI Backend API server running on http://localhost:${PORT}`);
  console.log(`📧 Email notifications: ${process.env.SMTP_USER ? 'Enabled' : 'Disabled (configure SMTP_USER and SMTP_PASS in .env)'}`);
});

