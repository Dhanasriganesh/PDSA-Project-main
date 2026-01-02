/**
 * Get the API base URL
 * Uses serverless functions - no separate backend needed
 */
export const getApiBaseUrl = () => {
  // If VITE_API_URL is set, use it (for custom deployments)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Always use relative path for serverless functions
  // Works with Vercel, Netlify, and other serverless platforms
  return '/api';
};

