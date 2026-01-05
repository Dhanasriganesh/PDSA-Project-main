/**
 * Get the API base URL
 * 
 * Uses Vercel serverless functions (relative /api path)
 * Works for both local development (with vercel dev) and production
 */
export const getApiBaseUrl = () => {
  // Always use relative path for serverless functions
  // Works with Vercel dev (local) and Vercel production deployment
  return '/api';
};

