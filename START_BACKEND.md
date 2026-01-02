# How to Start the Backend Server

## Quick Start

The error `ERR_CONNECTION_REFUSED` means the backend server is not running. Follow these steps:

### Step 1: Open a Terminal

Open a new terminal window (keep your frontend running in another terminal).

### Step 2: Navigate to Backend Folder

```bash
cd backend
```

### Step 3: Install Dependencies (if not done already)

```bash
npm install
```

This installs:
- `express` - Web server
- `cors` - Cross-origin resource sharing
- `nodemailer` - Email sending
- `multer` - File upload handling
- `dotenv` - Environment variables

### Step 4: Start the Backend Server

```bash
npm run dev
```

You should see:
```
🚀 PDSA TECH Backend API server running on http://localhost:5000
📧 Email notifications: Enabled/Disabled
```

### Step 5: Verify It's Working

Open your browser and go to:
```
http://localhost:5000/api/health
```

You should see:
```json
{"status":"OK","message":"PDSA TECH API is running"}
```

## Running Both Frontend and Backend

You need **two terminal windows**:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Troubleshooting

### Port 5000 Already in Use

If you see an error about port 5000 being in use:

1. **Option 1**: Stop the other process using port 5000
2. **Option 2**: Change the port in `backend/.env`:
   ```env
   PORT=5001
   ```
   Then update `src/utils/api.js` to use port 5001 in development.

### Backend Won't Start

1. Make sure you're in the `backend` folder
2. Make sure `node_modules` exists (run `npm install`)
3. Check for error messages in the terminal
4. Verify Node.js is installed: `node --version`

### Still Getting Connection Refused

1. **Check the backend is actually running**: Look for the success message in terminal
2. **Check the URL**: Make sure it's `http://localhost:5000` (not `https://`)
3. **Check firewall**: Make sure your firewall isn't blocking port 5000
4. **Try a different port**: Change to 3001 or 8000 if needed

## Environment Variables (Optional)

For email functionality, create `backend/.env`:

```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=recipient@example.com
```

**Note**: The backend will work without email configuration, but won't send emails.

## What the Backend Does

The backend server:
- ✅ Handles contact form submissions at `/api/contact`
- ✅ Handles career applications at `/api/careers/apply`
- ✅ Processes file uploads (resumes, documents)
- ✅ Sends email notifications (if configured)
- ✅ Validates form data
- ✅ Returns proper JSON responses

## Next Steps

Once the backend is running:
1. Go back to your browser
2. Try submitting the form again
3. You should see a success message instead of an error

