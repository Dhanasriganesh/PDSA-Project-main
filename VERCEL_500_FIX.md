# Fixing 500 Error on Vercel

## Quick Steps to Diagnose

1. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard → Your Project → Functions
   - Click on `api/contact` or `api/careers/apply`
   - Check the logs for the actual error

2. **Common Issues & Fixes**:

### Issue 1: Missing Dependencies
**Solution**: Make sure these are in `package.json` dependencies (not devDependencies):
```json
{
  "dependencies": {
    "nodemailer": "^6.9.8",
    "formidable": "^3.5.1"
  }
}
```

### Issue 2: Formidable Not Working in Serverless
**Solution**: The request object in Vercel might be different. Try this alternative approach.

### Issue 3: Function Timeout
**Solution**: Increase timeout in `vercel.json`:
```json
{
  "functions": {
    "api/**/*.js": {
      "maxDuration": 30
    }
  }
}
```

### Issue 4: Environment Variables Not Set
**Solution**: 
- Go to Vercel Dashboard → Settings → Environment Variables
- Add: `GMAIL_USER` and `GMAIL_APP_PASSWORD`
- Redeploy after adding

## Testing

After redeploying, test with:
```bash
curl -X POST https://your-project.vercel.app/api/contact \
  -F "name=Test" \
  -F "email=test@example.com" \
  -F "mobile=1234567890" \
  -F "topic=strategy" \
  -F "message=Test message"
```

## Next Steps

1. Check the function logs in Vercel dashboard
2. Share the error message from the logs
3. We can then fix the specific issue

