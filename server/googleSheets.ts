interface SignupData {
  fullName: string;
  email: string;
  city: string;
  role: string;
  timestamp?: string;
}

export class GoogleSheetsService {
  private spreadsheetId: string;
  private webhookUrl: string | null;

  constructor() {
    // Extract spreadsheet ID from the URL
    this.spreadsheetId = '1A8PgE3G3_7yeppXrNtUK9z5ZaCE0WyO611BWVGol-GA';
    
    // You can set up a webhook URL (like Zapier, Make.com, or Google Apps Script)
    // For now, we'll use a simple logging approach
    this.webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || null;
  }

  async addSignup(data: SignupData): Promise<boolean> {
    try {
      const timestamp = new Date().toISOString();
      const signupData = {
        ...data,
        timestamp,
        spreadsheetId: this.spreadsheetId,
        sheetName: 'SIGNUPS'
      };

      // Method 1: Use webhook if available
      if (this.webhookUrl) {
        const response = await fetch(this.webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupData),
        });

        if (response.ok) {
          console.log('Successfully sent signup to webhook:', signupData);
          return true;
        } else {
          console.error('Webhook failed:', response.status, response.statusText);
        }
      }

      // Method 2: Log for manual processing (fallback)
      console.log('=== NEW SIGNUP FOR GOOGLE SHEETS ===');
      console.log('Spreadsheet ID:', this.spreadsheetId);
      console.log('Sheet Name: SIGNUPS');
      console.log('Data to add:');
      console.log('Timestamp:', timestamp);
      console.log('Full Name:', data.fullName);
      console.log('Email:', data.email);
      console.log('City:', data.city);
      console.log('Role:', data.role);
      console.log('=====================================');

      return true;
    } catch (error) {
      console.error('Error processing signup for Google Sheets:', error);
      return false;
    }
  }

  // Method to create a Google Apps Script webhook URL
  getSetupInstructions(): string {
    return `
To complete Google Sheets integration:

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/edit
2. Go to Extensions > Apps Script
3. Replace the default code with:

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.openById('${this.spreadsheetId}').getSheetByName('SIGNUPS');
  
  // Add header row if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'City', 'Role']);
  }
  
  // Add the new signup
  sheet.appendRow([
    data.timestamp,
    data.fullName,
    data.email,
    data.city,
    data.role
  ]);
  
  return ContentService.createTextOutput('Success');
}

4. Deploy as Web App (Execute as: Me, Access: Anyone)
5. Copy the Web App URL and set it as GOOGLE_SHEETS_WEBHOOK_URL environment variable
`;
  }
}

export const googleSheetsService = new GoogleSheetsService();