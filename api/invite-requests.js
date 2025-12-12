// Vercel serverless function for handling invite requests
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullName, email, city, role } = req.body;

    // Basic validation
    if (!fullName || !email || !city || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address' });
    }

    // Google Sheets webhook URL from environment
    const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    
    if (!WEBHOOK_URL) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL not configured');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Prepare data for Google Sheets
    const signupData = {
      timestamp: new Date().toISOString(),
      fullName,
      email,
      city,
      role
    };

    // Send to Google Sheets
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    });

    if (response.ok) {
      console.log('✅ Successfully added signup to Google Sheets:', signupData);
      
      res.status(200).json({ 
        message: 'Invite request submitted successfully',
        data: {
          fullName,
          email,
          city,
          role,
          timestamp: signupData.timestamp
        }
      });
    } else {
      console.error('Google Sheets webhook failed:', response.status, response.statusText);
      res.status(500).json({ message: 'Failed to submit request. Please try again.' });
    }

  } catch (error) {
    console.error('Error processing invite request:', error);
    res.status(500).json({ message: 'Failed to submit request. Please try again.' });
  }
}