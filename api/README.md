# Serverless API Functions

This directory contains serverless functions for handling form submissions and email sending.

## Setup

### 1. Install Dependencies

Make sure you have the required dependencies installed:

```bash
npm install nodemailer formidable
```

### 2. Environment Variables

Create a `.env` file in the root directory (or configure in your deployment platform) with the following variables:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
MAIL_TO=recipient@example.com
```

**Note:** For Gmail, you need to:
1. Enable 2-Step Verification on your Google account
2. Generate an "App Password" from your Google Account settings
3. Use the App Password (not your regular password) in `GMAIL_APP_PASSWORD`

### 3. Deployment

#### Vercel

These functions are automatically detected by Vercel when deployed. Just deploy your project:

```bash
vercel
```

#### Netlify

For Netlify, you'll need to use Netlify Functions. The functions need to be adapted for Netlify's format.

#### Other Platforms

The functions use standard Node.js patterns and can be adapted for other serverless platforms like AWS Lambda, Google Cloud Functions, etc.

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request:** `multipart/form-data`
- `name` (required): Full name
- `email` (required): Email address
- `mobile` (required): Mobile/phone number
- `company` (optional): Company name
- `topic` (required): Topic selection (strategy, platforms, ai, careers, media)
- `message` (optional): Message text
- `file` (optional): File attachment (PDF, DOC, DOCX, ZIP, PPT, PPTX)

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### POST /api/careers/apply

Handles career application submissions.

**Request:** `multipart/form-data`
- `name` (required): Full name
- `email` (required): Email address
- `mobile` (required): Mobile/phone number
- `role` (required): Role of interest
- `message` (optional): Additional message
- `file` (optional): Resume file (PDF, DOC, DOCX, ZIP)

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully!"
}
```

## Local Development

For local development, you can use the Express backend in the `backend` folder, or use a tool like `vercel dev` to test the serverless functions locally.

## Troubleshooting

### Email not sending

1. Check that `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set correctly
2. Verify you're using an App Password (not your regular Gmail password)
3. Check that 2-Step Verification is enabled on your Google account
4. Review server logs for error messages

### File upload issues

1. Ensure file size is under 10MB
2. Check that file type is in the allowed list
3. Verify the multipart/form-data is being sent correctly



