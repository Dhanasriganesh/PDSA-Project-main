# Vercel Deployment Guide

## The Issue

If you're seeing "Unable to connect to server" on Vercel, it means the serverless functions aren't working. Here's how to fix it:

## Step 1: Verify Serverless Functions Structure

Make sure your `api/` folder has:
- `api/contact.js` - Contact form handler
- `api/careers/apply.js` - Career application handler

## Step 2: Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add these variables:
   - `GMAIL_USER` = your-email@gmail.com
   - `GMAIL_APP_PASSWORD` = your-app-password
   - `MAIL_TO` = recipient@example.com

## Step 3: Verify vercel.json

Your `vercel.json` should have:

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Step 4: Check Function Logs

1. Go to Vercel Dashboard → Your Project → **Functions** tab
2. Check for any errors in the function logs
3. Look for deployment errors

## Common Issues

### Issue 1: Functions Not Found (404)

**Solution**: Make sure the files are named correctly:
- `api/contact.js` (not `api/contact.ts` or `api/contact/index.js`)
- `api/careers/apply.js` (not `api/careers/apply.ts`)

### Issue 2: Module Not Found

**Solution**: Make sure `nodemailer` and `formidable` are in your root `package.json` dependencies (they should be).

### Issue 3: Environment Variables Not Set

**Solution**: 
- Add environment variables in Vercel dashboard
- Redeploy after adding them

### Issue 4: Function Timeout

**Solution**: 
- Vercel free tier has 10s timeout
- Check if email sending is taking too long
- Consider using a faster email service

## Testing on Vercel

After deployment, test the endpoints:

1. **Contact Form**: `https://your-project.vercel.app/api/contact`
2. **Career Form**: `https://your-project.vercel.app/api/careers/apply`

You can test with curl:

```bash
curl -X POST https://your-project.vercel.app/api/contact \
  -F "name=Test" \
  -F "email=test@example.com" \
  -F "mobile=1234567890" \
  -F "topic=strategy" \
  -F "message=Test message"
```

## Quick Fix Checklist

- [ ] Serverless functions exist in `api/` folder
- [ ] `vercel.json` has correct routing
- [ ] Environment variables are set in Vercel
- [ ] Dependencies (`nodemailer`, `formidable`) are in `package.json`
- [ ] Functions use `module.exports` (CommonJS)
- [ ] Redeploy after making changes

## Still Not Working?

1. Check Vercel function logs for specific errors
2. Verify the function files are being deployed (check Functions tab)
3. Test the API endpoints directly
4. Make sure you're using the correct URL format (`/api/contact`, not `/api/contact/`)



