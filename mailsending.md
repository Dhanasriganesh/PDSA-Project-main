# Form Mail Sending Implementation Guide

This document provides a complete specification for implementing backend mail sending functionality for the **Contact Form** and **Careers Application Form** used in this project.

## Table of Contents
1. [Contact Form Specification](#contact-form-specification)
2. [Careers Application Form Specification](#careers-application-form-specification)
3. [API Endpoints Required](#api-endpoints-required)
4. [Request/Response Formats](#requestresponse-formats)
5. [File Upload Handling](#file-upload-handling)
6. [Email Sending Requirements](#email-sending-requirements)
7. [Error Handling](#error-handling)
8. [Environment Variables](#environment-variables)

---

## Contact Form Specification

### Frontend Component
- **File**: `src/components/pages/contact/ContactFormSection.jsx`
- **API Endpoint**: `POST /api/contact`
- **Content-Type**: `multipart/form-data` (FormData)

### Form Fields

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | string | ✅ Yes | Full name of the contact |
| `company` | string | ❌ No | Company name (optional) |
| `email` | string | ✅ Yes | Email address (must be valid email format) |
| `mobile` | string | ✅ Yes | Mobile/phone number |
| `topic` | string | ✅ Yes | Topic selection (dropdown with values: "strategy", "platforms", "ai", "careers", "media") |
| `message` | string | ❌ No | Message/description text (textarea) |
| `file` | File | ❌ No | Supporting file attachment (accepted types: `.pdf`, `.doc`, `.docx`, `.zip`, `.ppt`, `.pptx`) |

### Topic Values
The `topic` field accepts one of these values:
- `"strategy"` → "Strategy / innovation"
- `"platforms"` → "Platforms / engineering"
- `"ai"` → "AI & automation"
- `"careers"` → "Careers"
- `"media"` → "Media / partnerships"

### Frontend Request Format
```javascript
// Frontend sends FormData
const payload = new FormData();
payload.append('name', formData.name);
payload.append('company', formData.company);
payload.append('email', formData.email);
payload.append('mobile', formData.mobile);
payload.append('topic', formData.topic);
payload.append('message', formData.message);
if (file) payload.append('file', file);

fetch(`${API_URL}/contact`, {
  method: 'POST',
  body: payload, // No Content-Type header needed - browser sets it automatically
});
```

### Expected Backend Response

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Please fill in all required fields (Name, Email, Topic)."
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "success": false,
  "error": "Failed to send message. Please try again later."
}
```

---

## Careers Application Form Specification

### Frontend Component
- **File**: `src/components/pages/careers/ApplicationFormSection.jsx`
- **API Endpoint**: `POST /api/careers/apply`
- **Content-Type**: `multipart/form-data` (FormData)

### Form Fields

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | string | ✅ Yes | Full name of the applicant |
| `email` | string | ✅ Yes | Email address (must be valid email format) |
| `mobile` | string | ✅ Yes | Mobile/phone number |
| `role` | string | ✅ Yes | Role of interest (free text input) |
| `message` | string | ❌ No | Additional message/description (textarea) |
| `file` | File | ❌ No | Resume/portfolio file (accepted types: `.pdf`, `.doc`, `.docx`, `.zip`) |

### Frontend Request Format
```javascript
// Frontend sends FormData
const payload = new FormData();
payload.append('name', formData.name);
payload.append('email', formData.email);
payload.append('mobile', formData.mobile);
payload.append('role', formData.role);
payload.append('message', formData.message);
if (file) payload.append('file', file);

fetch(`${API_URL}/careers/apply`, {
  method: 'POST',
  body: payload, // No Content-Type header needed - browser sets it automatically
});
```

### Expected Backend Response

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Application submitted successfully!"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Please fill in all required fields."
}
```

**Error Response (500 Internal Server Error):**
```json
{
  "success": false,
  "error": "Failed to send application. Please try again later."
}
```

---

## API Endpoints Required

### 1. Contact Form Endpoint
```
POST /api/contact
```

**Requirements:**
- Accept `multipart/form-data` requests
- Handle file uploads (optional)
- Validate required fields: `name`, `email`, `topic`
- Send email with form data and optional attachment
- Return JSON response with `success` boolean and `message`/`error` field

### 2. Careers Application Endpoint
```
POST /api/careers/apply
```

**Requirements:**
- Accept `multipart/form-data` requests
- Handle file uploads (optional)
- Validate required fields: `name`, `email`, `role`
- Send email with application data and optional resume attachment
- Return JSON response with `success` boolean and `message`/`error` field

---

## Request/Response Formats

### Request Headers
The frontend automatically sets:
```
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary...
```

**Backend should NOT manually set Content-Type** - let the multipart parser handle it.

### Response Format
All responses must be JSON with this structure:

**Success:**
```json
{
  "success": true,
  "message": "Success message here"
}
```

**Error:**
```json
{
  "success": false,
  "error": "Error message here"
}
```

### HTTP Status Codes
- `200` - Success
- `400` - Bad Request (validation errors, missing required fields)
- `500` - Internal Server Error (email sending failures, server errors)

---

## File Upload Handling

### File Upload Requirements

**Contact Form:**
- Field name: `file`
- Accepted file types: `.pdf`, `.doc`, `.docx`, `.zip`, `.ppt`, `.pptx`
- File is optional (may be `null` or `undefined`)

**Careers Form:**
- Field name: `file`
- Accepted file types: `.pdf`, `.doc`, `.docx`, `.zip`
- File is optional (may be `null` or `undefined`)

### File Upload Processing

1. **Parse multipart/form-data** using a library like:
   - Node.js: `multer` (Express), `formidable`, or `busboy`
   - Next.js API Routes: `formidable` or built-in FormData parser
   - Other frameworks: Use appropriate multipart parser

2. **Validate file type** (check extension or MIME type)

3. **Store file temporarily** (if needed) or process in memory

4. **Attach to email** as an attachment

5. **Clean up** temporary files after sending email

### Example File Handling (Node.js with multer)
```javascript
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Temporary storage

app.post('/api/contact', upload.single('file'), async (req, res) => {
  const file = req.file; // Will be undefined if no file uploaded
  
  // Process file if exists
  if (file) {
    // Attach to email
    // Clean up: fs.unlinkSync(file.path) after sending
  }
});
```

---

## Email Sending Requirements

### Email Service Configuration

The backend should support email sending via SMTP. Common options:
- **Gmail SMTP** (recommended for this project)
- **SendGrid**
- **Mailgun**
- **AWS SES**
- **Nodemailer** (Node.js library)

### Email Content Requirements

#### Contact Form Email

**From:** `"Nexus AI Contact" <your-email@domain.com>`

**To:** Recipient email (from environment variable or default)

**Subject:** `New Contact Form: {topic} - {name}`

**Body (HTML):** Should include:
- Name
- Company (if provided)
- Email
- Mobile number
- Topic (with human-readable label)
- Message (if provided)
- File attachment indicator (if file was uploaded)
- File attachment (if provided)

**Example Subject:**
```
New Contact Form: strategy - John Doe
```

#### Careers Application Email

**From:** `"Nexus AI Careers" <your-email@domain.com>`

**To:** Recipient email (from environment variable or default)

**Subject:** `New Career Application: {role} - {name}`

**Body (HTML):** Should include:
- Name
- Email
- Mobile number
- Role of interest
- Message (if provided)
- Resume attachment indicator (if file was uploaded)
- Resume attachment (if provided)

**Example Subject:**
```
New Career Application: Senior Developer - Jane Smith
```

### Email Template Structure

Both emails should be well-formatted HTML emails with:
- Professional styling
- Clear field labels
- Organized layout
- File attachment information (if applicable)

### Email Attachments

- Attach uploaded files to the email
- Use original filename when possible
- Handle file cleanup after sending

---

## Error Handling

### Validation Errors

**Contact Form Required Fields:**
- `name` - must be non-empty string
- `email` - must be valid email format
- `topic` - must be one of the valid topic values

**Careers Form Required Fields:**
- `name` - must be non-empty string
- `email` - must be valid email format
- `role` - must be non-empty string

**Error Response Format:**
```json
{
  "success": false,
  "error": "Please fill in all required fields."
}
```

### Email Service Errors

If email service is not configured or fails:
```json
{
  "success": false,
  "error": "Email service is not configured. Please contact the administrator."
}
```

Or:
```json
{
  "success": false,
  "error": "Failed to send message. Please try again later."
}
```

### Network/Server Errors

Return appropriate HTTP status codes:
- `400` for client errors (validation)
- `500` for server errors (email sending failures)

---

## Environment Variables

The backend should use these environment variables:

### Required
- `GMAIL_USER` - Gmail address for sending emails (or equivalent for other SMTP services)
- `GMAIL_APP_PASSWORD` - Gmail app password (or equivalent SMTP password)

### Optional
- `MAIL_TO` - Recipient email address (defaults to a fallback if not set)
- `VITE_API_URL` - API base URL (used by frontend, defaults to `/api`)

### Example `.env` file
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
MAIL_TO=recipient@example.com
```

---

## Implementation Checklist

When implementing the backend, ensure:

- [ ] **Contact Form Endpoint** (`POST /api/contact`)
  - [ ] Accepts multipart/form-data
  - [ ] Validates required fields: `name`, `email`, `topic`
  - [ ] Handles optional `company`, `mobile`, `message`, `file`
  - [ ] Validates file types if file is provided
  - [ ] Sends email with all form data
  - [ ] Attaches file to email if provided
  - [ ] Returns proper JSON response format
  - [ ] Handles errors gracefully

- [ ] **Careers Application Endpoint** (`POST /api/careers/apply`)
  - [ ] Accepts multipart/form-data
  - [ ] Validates required fields: `name`, `email`, `role`
  - [ ] Handles optional `mobile`, `message`, `file`
  - [ ] Validates file types if file is provided
  - [ ] Sends email with all application data
  - [ ] Attaches resume file to email if provided
  - [ ] Returns proper JSON response format
  - [ ] Handles errors gracefully

- [ ] **Email Service**
  - [ ] Configured with SMTP credentials
  - [ ] Sends HTML formatted emails
  - [ ] Includes all form fields in email body
  - [ ] Handles file attachments
  - [ ] Uses proper "From" name and email
  - [ ] Uses dynamic subject lines

- [ ] **File Handling**
  - [ ] Accepts file uploads
  - [ ] Validates file types
  - [ ] Stores files temporarily (if needed)
  - [ ] Attaches files to emails
  - [ ] Cleans up temporary files after sending

- [ ] **Error Handling**
  - [ ] Validates all required fields
  - [ ] Returns appropriate HTTP status codes
  - [ ] Returns JSON error responses
  - [ ] Handles email service failures
  - [ ] Logs errors for debugging

---

## Frontend Integration Notes

### API Base URL
The frontend uses:
```javascript
const getApiBaseUrl = () => import.meta.env.VITE_API_URL || '/api';
```

This means:
- If `VITE_API_URL` is set, use that
- Otherwise, use relative path `/api`

### Response Handling
The frontend expects:
- `data.success` - boolean indicating success/failure
- `data.message` - success message (if successful)
- `data.error` - error message (if failed)

### Loading States
The frontend shows:
- "Sending..." button text while `isSubmitting` is true
- Success/error messages in colored alert boxes
- Form reset on successful submission

---

## Example Implementation Snippets

### Node.js/Express with Multer and Nodemailer

```javascript
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Contact form endpoint
app.post('/api/contact', upload.single('file'), async (req, res) => {
  try {
    const { name, company, email, mobile, topic, message } = req.body;
    const file = req.file;

    // Validation
    if (!name || !email || !topic) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Name, Email, Topic).',
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Prepare email
    const mailOptions = {
      from: `"Nexus AI Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO || 'default@example.com',
      subject: `New Contact Form: ${topic} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
        ${file ? '<p><strong>File attached:</strong> Yes</p>' : ''}
      `,
      attachments: file ? [{
        filename: file.originalname || 'attachment',
        path: file.path,
      }] : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up file
    if (file) {
      fs.unlinkSync(file.path);
    }

    res.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
    });
  }
});

// Careers application endpoint
app.post('/api/careers/apply', upload.single('file'), async (req, res) => {
  try {
    const { name, email, mobile, role, message } = req.body;
    const file = req.file;

    // Validation
    if (!name || !email || !role) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields.',
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Prepare email
    const mailOptions = {
      from: `"Nexus AI Careers" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO || 'careers@example.com',
      subject: `New Career Application: ${role} - ${name}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
        ${file ? '<p><strong>Resume attached:</strong> Yes</p>' : ''}
      `,
      attachments: file ? [{
        filename: file.originalname || 'resume',
        path: file.path,
      }] : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up file
    if (file) {
      fs.unlinkSync(file.path);
    }

    res.json({
      success: true,
      message: 'Application submitted successfully!',
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send application. Please try again later.',
    });
  }
});
```

---

## Summary

This guide provides complete specifications for implementing backend mail sending functionality for:
1. **Contact Form** - General inquiries with optional file attachments
2. **Careers Application Form** - Job applications with optional resume attachments

Both forms:
- Send data via `multipart/form-data` (FormData)
- Support optional file uploads
- Require specific validation
- Need proper email formatting
- Must return consistent JSON responses
- Should handle errors gracefully

Use this document as a reference when implementing the backend in any project that uses these forms.


