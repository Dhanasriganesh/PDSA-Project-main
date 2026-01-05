# Environment Variables for Vercel

## Required Environment Variables

Add these in your Vercel Dashboard:

### 1. Go to Vercel Dashboard
- Visit: https://vercel.com/dashboard
- Select your project
- Go to **Settings** → **Environment Variables**

### 2. Add These Variables

#### GMAIL_USER
- **Key**: `GMAIL_USER`
- **Value**: `tejaannangi1996@gmail.com`
- **Environment**: Production, Preview, Development (select all)

#### GMAIL_APP_PASSWORD
- **Key**: `GMAIL_APP_PASSWORD`
- **Value**: `zmnxembklkfmwrox`
- **Environment**: Production, Preview, Development (select all)

#### MAIL_TO (Optional - if you want to change recipient)
- **Key**: `MAIL_TO`
- **Value**: `groupartihcus@gmail.com`
- **Environment**: Production, Preview, Development (select all)

## How to Add in Vercel

1. **Go to your project** in Vercel Dashboard
2. Click on **Settings** tab
3. Click on **Environment Variables** in the left sidebar
4. Click **Add New**
5. Enter the **Key** and **Value**
6. Select the environments (Production, Preview, Development)
7. Click **Save**
8. **Important**: After adding/changing variables, you must **Redeploy** your project

## Redeploy After Adding Variables

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) menu on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger auto-deployment

## Security Note

- Environment variables are encrypted and secure
- Never commit `.env` files to Git
- The `.env` file is already in `.gitignore`

## Current Configuration

The code will use:
- `GMAIL_USER` from environment variable (or fallback to hardcoded value)
- `GMAIL_APP_PASSWORD` from environment variable (or fallback to hardcoded value)
- Emails are sent to: `groupartihcus@gmail.com`

## Testing

After adding environment variables and redeploying:
1. Test the contact form
2. Check that emails are being sent
3. Check Vercel function logs if there are any issues

