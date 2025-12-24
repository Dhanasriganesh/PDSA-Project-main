# Setup Guide for TetraX AI Website Clone

This guide will help you set up and run both the frontend and backend of the TetraX AI website clone.

## Quick Start

### Step 1: Install Frontend Dependencies

From the root directory:
```bash
npm install
```

### Step 2: Install Backend Dependencies

Navigate to the backend directory and install:
```bash
cd backend
npm install
cd ..
```

### Step 3: Configure Backend (Optional)

If you want email notifications for contact form submissions:

1. Copy the environment example file:
   ```bash
   # Windows PowerShell:
   Copy-Item backend/env.example.txt backend/.env
   
   # Linux/Mac:
   cp backend/env.example.txt backend/.env
   ```

2. Edit `backend/.env` and add your SMTP credentials (for Gmail, use an App Password)

### Step 4: Start the Application

You need to run both servers simultaneously. Open two terminal windows:

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:5000`

**Terminal 2 - Frontend Server:**
```bash
npm run dev
```
Frontend will run on `http://localhost:5173` (or the port shown)

### Step 5: Access the Application

Open your browser and navigate to:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api/health`

## Features Available

### Frontend Pages
- `/` - Home page with hero section, services, clients, and testimonials
- `/service` - Services overview
- `/industry` - Industries we serve
- `/technology` - Technologies we work with
- `/client` - Our clients
- `/about` - About us
- `/career` - Career opportunities
- `/contact` - Contact form (connects to backend API)

### Backend API Endpoints
- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Newsletter subscription
- `POST /api/career/apply` - Submit job application

## Troubleshooting

### Frontend not connecting to backend
- Make sure the backend server is running on port 5000
- Check browser console for CORS errors
- Verify the API endpoint URL in Contact.jsx matches your backend URL

### Backend not starting
- Make sure port 5000 is not already in use
- Check that all dependencies are installed (`npm install` in backend folder)
- Check for syntax errors in `backend/server.js`

### Contact form not working
- Backend server must be running
- Check browser console for errors
- Check backend terminal for server logs
- Email notifications require SMTP configuration (optional)

## Production Deployment

For production deployment:

1. Build the frontend:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` folder

3. For backend, you can:
   - Deploy to services like Heroku, Railway, or Render
   - Use a process manager like PM2
   - Set up a proper database (currently uses in-memory storage)

## Notes

- Contact form submissions are stored in memory (lost on server restart)
- For production, integrate a database (MongoDB, PostgreSQL, etc.)
- Email notifications are optional but recommended for contact forms
- CORS is enabled for development; configure properly for production

