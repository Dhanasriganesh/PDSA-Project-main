# Fix for Vercel Deployment Error

## The Problem

You're seeing "Unable to connect to server" on your Vercel deployment because the serverless functions aren't working properly.

## Quick Fix Steps

### 1. Verify Environment Variables

In your Vercel dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add these (if not already added):
   - `GMAIL_USER` = your-email@gmail.com
   - `GMAIL_APP_PASSWORD` = your-app-password  
   - `MAIL_TO` = recipient@example.com

### 2. Redeploy

After adding/changing environment variables:
1. Go to **Deployments** tab
2. Click the **⋯** menu on the latest deployment
3. Click **Redeploy**

### 3. Check Function Logs

1. Go to **Functions** tab in Vercel dashboard
2. Click on `api/contact` or `api/careers/apply`
3. Check the logs for errors

## Common Issues & Solutions

### Issue: Functions Not Found (404)

**Check:**
- Files exist: `api/contact.js` and `api/careers/apply.js`
- Files use `module.exports` (CommonJS format)
- `vercel.json` is in root directory

### Issue: Module Not Found

**Solution:**
Make sure these are in your root `package.json`:
```json
"dependencies": {
  "nodemailer": "^6.9.8",
  "formidable": "^3.5.1"
}
```

Then redeploy.

### Issue: Environment Variables Not Working

**Solution:**
1. Make sure variables are set for **Production** environment
2. Redeploy after adding variables
3. Check variable names match exactly (case-sensitive)

### Issue: Function Timeout

**Solution:**
- Vercel free tier has 10s timeout
- If email sending takes too long, consider:
  - Using a faster email service
  - Sending emails asynchronously
  - Using a queue service

## Testing

After redeploying, test the API:

```bash
# Test contact endpoint
curl -X POST https://your-project.vercel.app/api/contact \
  -F "name=Test" \
  -F "email=test@example.com" \
  -F "mobile=1234567890" \
  -F "topic=strategy" \
  -F "message=Test"
```

## What I Fixed

1. ✅ Updated error messages (removed localhost:5000 reference)
2. ✅ Updated `vercel.json` configuration
3. ✅ Verified serverless function format

## Next Steps

1. **Add environment variables** in Vercel dashboard
2. **Redeploy** your project
3. **Test** the forms on your Vercel URL
4. **Check logs** if still having issues

The forms should work now on Vercel! 🚀



