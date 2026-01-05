# Serverless Mail Sending Setup Guide

This guide explains how to set up and use the serverless mail sending functionality for the Contact and Career forms.

## Overview

The project now includes serverless functions that handle form submissions and send emails. These functions are located in the `api/` directory and work with Vercel, Netlify, and other serverless platforms.

## Files Created/Modified

### Frontend Changes
1. **src/utils/api.js** - Utility function for API base URL
2. **src/components/pages/Contact.jsx** - Updated to use FormData and match spec
3. **src/components/pages/Career.jsx** - Updated to use FormData and match spec

### Backend/Serverless Functions
1. **api/contact.js** - Serverless function for contact form
2. **api/careers/apply.js** - Serverless function for career applications
3. **api/README.md** - API documentation

### Configuration
1. **package.json** - Added nodemailer and formidable dependencies

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `nodemailer` - For sending emails
- `formidable` - For parsing multipart/form-data

### 2. Configure Environment Variables

Create a `.env` file in the root directory (or configure in your deployment platform):

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
MAIL_TO=recipient@example.com
```

**Important for Gmail:**
1. Enable 2-Step Verification on your Google account
2. Go to Google Account → Security → 2-Step Verification → App passwords
3. Generate a new App Password for "Mail"
4. Use this App Password (not your regular password) in `GMAIL_APP_PASSWORD`

### 3. Local Development

#### Option A: Use Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally
vercel dev
```

This will start a local server that mimics Vercel's serverless environment.

#### Option B: Use Express Backend

You can still use the Express backend in the `backend/` folder for local development. Update the API base URL in your `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Deployment

#### Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The functions in `api/` will be automatically detected.

#### Netlify

For Netlify, you'll need to:
1. Move functions to `netlify/functions/` directory, OR
2. Configure `netlify.toml` to point to `api/` directory

## Form Specifications

### Contact Form

**Fields:**
- `name` (required) - Full name
- `email` (required) - Email address
- `mobile` (required) - Mobile/phone number
- `company` (optional) - Company name
- `topic` (required) - Dropdown: strategy, platforms, ai, careers, media
- `message` (optional) - Message text
- `file` (optional) - File attachment (PDF, DOC, DOCX, ZIP, PPT, PPTX, max 10MB)

**Endpoint:** `POST /api/contact`

### Career Application Form

**Fields:**
- `name` (required) - Full name
- `email` (required) - Email address
- `mobile` (required) - Mobile/phone number
- `role` (required) - Role of interest (free text)
- `message` (optional) - Additional message
- `file` (optional) - Resume file (PDF, DOC, DOCX, ZIP, max 10MB)

**Endpoint:** `POST /api/careers/apply`

## API Response Format

### Success Response (200)
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### Error Response (400/500)
```json
{
  "success": false,
  "error": "Error message here"
}
```

## Testing

### Test Contact Form

1. Fill out the contact form on `/contact`
2. Select a topic from the dropdown
3. Optionally attach a file
4. Submit the form
5. Check the recipient email inbox

### Test Career Form

1. Fill out the career application on `/career`
2. Enter role of interest
3. Optionally attach a resume
4. Submit the form
5. Check the recipient email inbox

## Troubleshooting

### Email Not Sending

1. **Check Environment Variables**
   - Verify `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set
   - Ensure you're using an App Password (not regular password)

2. **Check Gmail Settings**
   - 2-Step Verification must be enabled
   - App Password must be generated correctly

3. **Check Server Logs**
   - Review function logs in your deployment platform
   - Look for error messages

### File Upload Issues

1. **File Size**
   - Maximum file size is 10MB
   - Check file size before uploading

2. **File Type**
   - Contact form: PDF, DOC, DOCX, ZIP, PPT, PPTX
   - Career form: PDF, DOC, DOCX, ZIP

3. **Network Issues**
   - Check browser console for errors
   - Verify API endpoint is accessible

### CORS Issues

If you encounter CORS errors:
- Ensure your deployment platform allows CORS
- Check that API endpoints are correctly configured
- Verify the API base URL in frontend matches your deployment

## Production Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent abuse
2. **Spam Protection**: Add CAPTCHA or similar spam protection
3. **Email Templates**: Customize email templates for better branding
4. **Error Logging**: Set up proper error logging and monitoring
5. **Database**: Consider storing submissions in a database for record-keeping

## Support

For issues or questions:
1. Check the `mailsending.md` file for detailed specifications
2. Review server logs for error messages
3. Verify environment variables are set correctly
4. Test with a simple form submission first



