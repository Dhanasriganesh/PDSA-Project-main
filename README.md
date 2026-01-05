

A full-stack clone of the TetraX AI website with React frontend and Vercel serverless functions.

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
├── api/                    # Vercel serverless functions
│   ├── contact.js         # Contact form handler
│   └── careers/
│       └── apply.js       # Career application handler
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

### Serverless Functions
- ✅ Contact form submission endpoint
- ✅ Career application endpoint
- ✅ File upload handling
- ✅ Email notifications (via nodemailer)
- ✅ Automatic deployment with Vercel

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory for email configuration:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

**Note:** All contact form and career application emails will be sent to `groupartihcus@gmail.com`

**Note:** For Gmail, you need to:
- Enable 2-Step Verification on your Google account
- Generate an "App Password" from Google Account settings
- Use the App Password (not your regular password)

3. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

4. Start the development server:
```bash
npm run dev
```

This will start both the frontend and serverless functions together using `vercel dev`. The app will be available at `http://localhost:3000` (or the port shown in terminal).

**Alternative:** If you prefer to run just the frontend without serverless functions:
```bash
npm run dev:vite
```
Note: The contact form won't work without the serverless functions running.

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

### Backend/Serverless
- Vercel Serverless Functions
- Nodemailer (for email notifications)
- Formidable (for file upload handling)

## Development

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Scripts
- `npm run dev` - Start frontend + serverless functions together (recommended)
- `npm run dev:vite` - Start frontend only (contact form won't work)

## Production Deployment

### Vercel (Recommended)

The project uses **Vercel serverless functions** located in the `api/` directory. No separate backend server is needed.

1. **Environment Variables in Vercel:**
   - Set `GMAIL_USER` - Your Gmail address
   - Set `GMAIL_APP_PASSWORD` - Gmail App Password (not regular password)
   
   **Note:** All contact form and career application emails will be sent to `groupartihcus@gmail.com`

2. **Deploy:**
   ```bash
   vercel
   ```

The serverless functions in `api/` will be automatically detected and deployed by Vercel.

### How It Works

- **Local Development**: 
  - Run `vercel dev` to start frontend + serverless functions together
  - Functions run locally in the `api/` directory
  - Uses `.env` file for email configuration

- **Production**: 
  - Frontend → Vercel serverless functions at `/api` (relative path)
  - No separate backend server needed
  - Functions are in `api/` directory
  - Environment variables set in Vercel dashboard

See `SERVERLESS_LOCAL.md` for detailed local setup instructions.

## Notes

- Email notifications are optional. The API works without email configuration, but won't send emails.
- For Gmail, use an "App Password" instead of your regular password.
- Serverless functions automatically handle CORS.

## License

This project is for educational purposes.
