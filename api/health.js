// Health check endpoint for Vercel
export default function handler(req, res) {
  res.status(200).json({ 
    status: 'OK', 
    message: 'BuilderDinner API running on Vercel',
    timestamp: new Date().toISOString()
  });
}