# Running Serverless Functions Locally (No Separate Backend)

You can run the serverless functions locally using Vercel CLI - no separate backend server needed!

## Quick Start

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Run Locally

From the project root:

```bash
vercel dev
```

This will:
- Start the frontend (Vite)
- Start the serverless functions
- Everything runs together on one port

### Step 3: Access Your App

Open your browser to the URL shown (usually `http://localhost:3000`)

## Environment Variables

Create a `.env` file in the root directory:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
MAIL_TO=recipient@example.com
```

**Note**: For Gmail, you need an App Password (not your regular password).

## How It Works

- **Frontend**: Runs on Vite (as usual)
- **API Functions**: Run as serverless functions in the `api/` folder
- **No Separate Backend**: Everything runs together with `vercel dev`

## Alternative: Production Deployment

When you deploy to Vercel:
1. Push your code to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The serverless functions will automatically work - no backend server needed!

## Troubleshooting

### Functions Not Working

1. Make sure you're in the project root
2. Make sure `api/contact.js` and `api/careers/apply.js` exist
3. Check that dependencies are installed: `npm install`

### Email Not Sending

1. Check environment variables are set
2. Verify Gmail App Password is correct
3. Check function logs in terminal

### Port Conflicts

If port 3000 is in use, Vercel will automatically use another port.



