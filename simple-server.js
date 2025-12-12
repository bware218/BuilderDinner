import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheets webhook URL
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxkhBXeP1Jt2I8KRJDnR3xk8AQNuJdxQBgU2owY_3ly7R08tyQb1JtiwSYcQz6SoKZCTw/exec';

// Store submitted emails to prevent duplicates (in-memory for testing)
const submittedEmails = new Set();

// Handle invite requests
app.post('/api/invite-requests', async (req, res) => {
  try {
    const { fullName, email, city, role } = req.body;

    // Basic validation
    if (!fullName || !email || !city || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for duplicate email
    if (submittedEmails.has(email)) {
      return res.status(409).json({ 
        message: 'This email has already been registered for an invite. Please check your inbox for updates.' 
      });
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
      // Add email to our in-memory store
      submittedEmails.add(email);
      
      console.log('✅ Successfully added signup to Google Sheets:', signupData);
      
      res.json({ 
        message: 'Invite request submitted successfully',
        data: signupData 
      });
    } else {
      console.error('Google Sheets webhook failed:', response.status, response.statusText);
      res.status(500).json({ message: 'Failed to submit request. Please try again.' });
    }

  } catch (error) {
    console.error('Error processing invite request:', error);
    res.status(500).json({ message: 'Failed to submit request. Please try again.' });
  }
});

// Check if email already exists
app.get('/api/invite-requests/check', (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  
  res.json({ 
    hasRequested: submittedEmails.has(email),
    request: submittedEmails.has(email) ? { email } : null
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Simple server running for Google Sheets integration' });
});

app.listen(PORT, () => {
  console.log(`🚀 Simple server running on http://localhost:${PORT}`);
  console.log('📊 Google Sheets integration active');
  console.log('✅ Ready to handle form submissions');
});