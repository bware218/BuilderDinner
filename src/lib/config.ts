// API Configuration for different environments
const config = {
  development: {
    apiUrl: 'http://localhost:3001',
  },
  production: {
    // For Vercel deployment, API routes are relative
    apiUrl: '', // Empty string means same domain
  }
};

const environment = import.meta.env.MODE as keyof typeof config;

export const API_CONFIG = config[environment] || config.development;

export const API_ENDPOINTS = {
  inviteRequests: `${API_CONFIG.apiUrl}/api/invite-requests`,
  checkInvite: `${API_CONFIG.apiUrl}/api/invite-requests/check`,
  health: `${API_CONFIG.apiUrl}/api/health`,
};