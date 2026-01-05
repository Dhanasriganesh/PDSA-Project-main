# Quick Fix for 404 Error

## The Problem
You're getting a 404 error because:
1. The backend endpoint was `/api/career/apply` but the frontend calls `/api/careers/apply`
2. The backend wasn't handling multipart/form-data (file uploads)

## The Solution

### Step 1: Install Backend Dependencies

Navigate to the backend folder and install the new dependency:

```bash
cd backend
npm install
```

This will install `multer` which is needed for handling file uploads.

### Step 2: Restart the Backend Server

Make sure your backend server is running:

```bash
cd backend
npm run dev
```

The server should start on `http://localhost:5000`

### Step 3: Verify the Endpoint

The backend now has the correct endpoint:
- ✅ `/api/careers/apply` (matches frontend)
- ✅ Handles multipart/form-data
- ✅ Handles file uploads
- ✅ Validates file types and sizes

### Step 4: Test the Form

1. Go to the Career page (`/career`)
2. Fill out the form
3. Optionally attach a resume file
4. Submit the form

You should now see a success message instead of a 404 error.

## What Was Fixed

1. **Backend endpoint**: Changed from `/api/career/apply` to `/api/careers/apply`
2. **Multipart handling**: Added `multer` middleware to handle FormData and file uploads
3. **Error handling**: Improved error handling in frontend to show better error messages
4. **API URL**: Updated to automatically use `http://localhost:5000/api` in development

## If You Still Get Errors

1. **Check backend is running**: Make sure you see `🚀 PDSA TECH Backend API server running on http://localhost:5000` in the terminal
2. **Check browser console**: Look for any CORS errors or network issues
3. **Check backend terminal**: Look for any error messages when submitting the form
4. **Verify environment variables**: Make sure your `.env` file in the backend folder has the correct SMTP credentials (optional, for email sending)



