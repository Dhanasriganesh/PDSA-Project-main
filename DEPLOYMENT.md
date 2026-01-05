# Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Press Enter for default)
   - Directory? (Press Enter for current directory)
   - Override settings? **No**

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**:
   - Visit https://vercel.com/dashboard
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: **Vite**
     - Root Directory: **./** (current directory)
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

## Important Notes

### Environment Variables (Optional)
If you want to use environment variables for email credentials instead of hardcoding:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `GMAIL_USER` = `tejaannangi1996@gmail.com`
   - `GMAIL_APP_PASSWORD` = `zmnxembklkfmwrox`

Then update `api/contact.js` and `api/careers/apply.js` to use:
```javascript
user: process.env.GMAIL_USER || 'tejaannangi1996@gmail.com',
pass: process.env.GMAIL_APP_PASSWORD || 'zmnxembklkfmwrox',
```

### Build Settings
Vercel will automatically detect:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### API Routes
Your API routes are automatically deployed as serverless functions:
- `/api/contact` → `api/contact.js`
- `/api/careers/apply` → `api/careers/apply.js`

### File Uploads
File uploads work in Vercel serverless functions using:
- Temporary storage (`/tmp` directory)
- Files are automatically cleaned up after email is sent

## Post-Deployment

1. **Test your forms**:
   - Visit your deployed site
   - Test the contact form
   - Test the career application form
   - Check that emails are being sent

2. **Monitor logs**:
   - Go to Vercel Dashboard → Your Project → Functions
   - Check logs for any errors

3. **Update domain** (if needed):
   - Go to Settings → Domains
   - Add your custom domain

## Troubleshooting

### API Routes Not Working
- Check that `vercel.json` is in the root directory
- Verify API routes are in the `api/` folder
- Check function logs in Vercel dashboard

### Email Not Sending
- Verify Gmail app password is correct
- Check function logs for errors
- Ensure `nodemailer` is in dependencies

### File Upload Issues
- Check file size limits (10MB max)
- Verify file types are allowed
- Check function timeout settings (default 10s, can be increased in vercel.json)

## Support
For issues, check:
- Vercel Documentation: https://vercel.com/docs
- Function Logs: Vercel Dashboard → Your Project → Functions

