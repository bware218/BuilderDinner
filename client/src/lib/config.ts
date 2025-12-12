// API Configuration for different environments
const config = {
  development: {
    apiUrl: 'http://localhost:3001',
  },
  production: {
    // You'll replace this with your actual backend URL when deployed
    apiUrl: 'https://your-backend-url.railway.app', // Example: Railway deployment
  }
};

const environment = import.meta.env.MODE as keyof typeof config;

export const API_CONFIG = config[environment] || config.development;

export const API_ENDPOINTS = {
  inviteRequests: `${API_CONFIG.apiUrl}/api/invite-requests`,
  checkInvite: `${API_CONFIG.apiUrl}/api/invite-requests/check`,
  health: `${API_CONFIG.apiUrl}/api/health`,
};