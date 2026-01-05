# Quick Start Guide

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Vercel CLI (if not already installed):**
   ```bash
   npm install -g vercel
   ```

3. **Create `.env` file in root directory:**
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```
   
   **Note:** All contact form and career application emails will be sent to `groupartihcus@gmail.com`

4. **Start development server:**
   ```bash
   npm run dev
   ```

   This starts both the frontend and serverless functions together at `http://localhost:3000`

## Production Deployment

1. **Deploy to Vercel:**
   ```bash
   vercel
   ```

2. **Set environment variables in Vercel dashboard:**
   - `GMAIL_USER` - Your Gmail address
   - `GMAIL_APP_PASSWORD` - Your Gmail App Password
   
   **Note:** All contact form and career application emails will be sent to `groupartihcus@gmail.com`

3. **Redeploy after setting environment variables:**
   ```bash
   vercel --prod
   ```

## Important Notes

- **No backend folder needed** - Everything uses serverless functions in `api/` directory
- **Local dev**: Use `npm run dev` (runs both frontend and serverless functions)
- **Gmail setup**: You need a Gmail App Password (not regular password)
- **Environment variables**: Same variables for local (`.env`) and production (Vercel dashboard)

## Troubleshooting

**Contact form not working:**
- Make sure you're using `vercel dev` (not just `npm run dev`)
- Check that `.env` file exists with email credentials
- Verify Gmail App Password is correct

**Email not sending:**
- Check environment variables are set correctly
- Verify 2-Step Verification is enabled on Google account
- Use App Password (not regular password)

