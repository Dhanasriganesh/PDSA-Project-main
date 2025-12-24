

A full-stack clone of the TetraX AI website with React frontend and Node.js/Express backend.

## Project Structure

```
pdsa/
├── src/                    # Frontend React application
│   ├── components/         # React components
│   │   ├── header/        # Header/Navigation component
│   │   ├── footer/        # Footer component
│   │   ├── layout/        # Layout wrapper
│   │   ├── pages/         # Page components (Home, Service, About, etc.)
│   │   └── routers/       # React Router configuration
│   └── ...
├── backend/               # Backend API server
│   ├── server.js         # Express server
│   ├── package.json      # Backend dependencies
│   └── ...
└── ...
```

## Features

### Frontend
- ✅ Modern, responsive design with TailwindCSS
- ✅ Multi-page navigation (Home, Service, Industry, Technology, Client, About, Career, Contact)
- ✅ Hero section with gradient background
- ✅ Services showcase
- ✅ Client logos section
- ✅ Testimonials carousel
- ✅ Mobile-responsive navigation menu
- ✅ Contact form integration

### Backend
- ✅ RESTful API with Express.js
- ✅ Contact form submission endpoint
- ✅ Newsletter subscription endpoint
- ✅ Career application endpoint
- ✅ CORS enabled for frontend integration
- ✅ Email notifications (optional, via nodemailer)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the port shown in terminal)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `env.example.txt`):
```bash
# On Windows PowerShell:
Copy-Item env.example.txt .env

# On Linux/Mac:
cp env.example.txt .env
```

4. Edit `.env` file with your configuration (optional - for email notifications):
```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=career@tetraxai.com
```

5. Start the backend server:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`

### Running Both Frontend and Backend

1. Open two terminal windows/tabs

2. Terminal 1 - Start backend:
```bash
cd backend
npm run dev
```

3. Terminal 2 - Start frontend:
```bash
npm run dev
```

## API Endpoints

### Contact Form
- `POST http://localhost:5000/api/contact`
  - Body: `{ name, email, phone?, company?, subject, message }`

### Newsletter
- `POST http://localhost:5000/api/newsletter`
  - Body: `{ email }`

### Career Applications
- `POST http://localhost:5000/api/career/apply`
  - Body: `{ name, email, phone?, position, coverLetter?, resume? }`

### Health Check
- `GET http://localhost:5000/api/health`

## Technologies Used

### Frontend
- React 19
- React Router DOM
- TailwindCSS 4
- Vite

### Backend
- Node.js
- Express.js
- Nodemailer (for email notifications)
- CORS

## Development

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload

## Notes

- The backend currently stores contact submissions in memory. For production, integrate a database (MongoDB, PostgreSQL, etc.)
- Email notifications are optional. The API works without SMTP configuration, but won't send emails.
- For Gmail SMTP, use an "App Password" instead of your regular password.
- Make sure to configure CORS properly if deploying frontend and backend separately.

## License

This project is for educational purposes.
