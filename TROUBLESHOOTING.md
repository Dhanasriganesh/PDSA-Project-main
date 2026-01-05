# Troubleshooting Guide

## 404 Error: "Failed to load resource: the server responded with a status of 404"

### Problem
You're seeing `api/contact:1 Failed to load resource: the server responded with a status of 404 (Not Found)`

### Solution

**Make sure you're using `npm run dev` (which runs `vercel dev`)**

The serverless functions in the `api/` folder only work when you run:
```bash
npm run dev
```

This command runs `vercel dev` which starts both the frontend and serverless functions together.

**Note:** If you see an error that `vercel` command is not found, install it:
```bash
npm install -g vercel
```

### Steps to Fix

1. **Stop the current dev server** (if running):
   - Press `Ctrl+C` in the terminal

2. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Access your app**:
   - The URL will be shown in the terminal (usually `http://localhost:3000`)
   - The serverless functions will now be available at `/api/contact`

### Verify It's Working

1. Open your browser to the URL shown (e.g., `http://localhost:3000`)
2. Open browser DevTools (F12) → Network tab
3. Try submitting the contact form
4. You should see a request to `/api/contact` with status 200 (not 404)

### Alternative: Check if Functions Are Running

You can test the API endpoint directly:
```bash
curl http://localhost:3000/api/contact
```

If you get a response (even an error about method not allowed), the function is running.
If you get 404, the function is not running.

## Other Common Issues

### Issue: "Cannot find module 'nodemailer'"

**Solution**: Install dependencies:
```bash
npm install
```

### Issue: Email not sending

**Solution**: 
1. Create `.env` file in root directory:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

2. Make sure you're using a Gmail App Password (not regular password)

### Issue: Port already in use

**Solution**: 
- Vercel will automatically use another port
- Check the terminal output for the actual port number

