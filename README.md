# BuilderDinner - Replit Fellows Dinner Tour Website

A modern, responsive website for the Replit Fellows Builder Dinner Tour - connecting diverse founders, builders, and innovators across America's most dynamic cities.

## 🌟 Features

### 🏠 **Homepage**
- Interactive tour dates with city toggle functionality
- Professional hero section with call-to-action
- Responsive design optimized for all devices

### 🗺️ **Tour Page**
- 2025-2026 tour information
- Photo gallery of past events
- Upcoming dates across 8 major cities

### 📝 **Invite Request System**
- Multi-city signup form (San Francisco, Chicago, Seattle, Miami, Oakland, Atlanta, NYC, Minneapolis)
- **Google Sheets Integration** - automatic data collection
- Form validation and duplicate prevention
- Success confirmation with personalized messaging

### 🔗 **Navigation & Pages**
- Resources link to Replit Learn platform
- Professional "Coming Soon" pages for Stories and FAQ
- Mobile-responsive navigation

## 🚀 Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS, Radix UI components
- **Backend:** Express.js, Node.js
- **Integration:** Google Sheets API via Apps Script
- **Routing:** Wouter (lightweight React router)

## 📊 Google Sheets Integration

All form submissions are automatically saved to a Google Sheets spreadsheet with:
- Timestamp
- Full Name
- Email Address
- City of Interest
- Role (Attendee/Host)

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bware218/BuilderDinner.git
   cd BuilderDinner
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Add your Google Sheets webhook URL to `.env`:
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_webhook_url
   ```

4. **Start development servers:**
   
   **Option A: Full Development (Recommended)**
   ```bash
   # Terminal 1: Start frontend
   npm run dev:client
   
   # Terminal 2: Start simple backend
   node simple-server.js
   ```
   
   **Option B: Frontend Only**
   ```bash
   npm run dev:client
   ```

5. **Access the application:**
   - Frontend: `http://localhost:5001`
   - Backend API: `http://localhost:3001` (if running full setup)

## 🔧 Google Sheets Setup

To enable automatic form submissions to Google Sheets:

1. Create a Google Apps Script in your Google Sheet
2. Use the provided script in `google-apps-script.js`
3. Deploy as a web app with "Anyone" access
4. Add the webhook URL to your `.env` file

## 📁 Project Structure

```
BuilderDinner/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Express backend (full version)
├── simple-server.js        # Lightweight backend for development
├── shared/                 # Shared TypeScript schemas
└── README.md
```

## 🎨 Key Features

### City Toggle System
The homepage features an interactive toggle between two sets of cities:
- **Original Cities:** Oakland, Atlanta, NYC, Minneapolis
- **New Cities:** San Francisco, Chicago, Seattle, Miami

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interactions

### Form Validation
- Real-time validation
- Duplicate email prevention
- Success/error messaging

## 🚀 Deployment

The application is designed to be deployed on platforms like:
- Vercel
- Netlify
- Railway
- Heroku

For production deployment, ensure:
1. Environment variables are properly set
2. Google Sheets integration is configured
3. Build process completes successfully

## 📝 Scripts

- `npm run dev:client` - Start frontend development server
- `npm run dev` - Start full development server (requires database)
- `npm run build` - Build for production
- `npm run start` - Start production server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- **Live Site:** [Coming Soon]
- **Google Sheet:** [Private - Contact admin for access]
- **Replit Learn:** https://replit.com/learn

---

Built with ❤️ for the Replit Fellows community