# TetraX AI Backend API

Backend server for the TetraX AI website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
   - `PORT`: Server port (default: 5000)
   - `SMTP_HOST`: SMTP server host (optional, for email notifications)
   - `SMTP_PORT`: SMTP server port (optional)
   - `SMTP_USER`: SMTP username (optional)
   - `SMTP_PASS`: SMTP password (optional)
   - `CONTACT_EMAIL`: Email address to receive contact form submissions (optional)

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Check if the API is running

### Contact Form
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, phone?, company?, subject, message }`

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
  - Body: `{ email }`

### Career Applications
- `POST /api/career/apply` - Submit job application
  - Body: `{ name, email, phone?, position, coverLetter?, resume? }`

### Admin (for future use)
- `GET /api/contact/submissions` - Get all contact form submissions

## Notes

- The contact form submissions are currently stored in memory. In production, you should use a database.
- Email notifications are optional. If SMTP credentials are not configured, the API will still work but won't send emails.
- For Gmail, you'll need to use an "App Password" instead of your regular password.

