# Email Setup for Contact Form

The contact form is now configured to send emails to `pantprachi58@gmail.com`. To make it work, you need to set up Gmail authentication.

## Steps to Configure Email

### 1. Enable 2-Step Verification on Google Account
1. Go to https://myaccount.google.com/security
2. Under "Signing in to Google", enable "2-Step Verification"

### 2. Generate App Password
1. After enabling 2-Step Verification, go to: https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Other (Custom name)" and enter "SS Interiorshub Website"
4. Click "Generate"
5. Copy the 16-character app password (it will look like: `xxxx xxxx xxxx xxxx`)

### 3. Update Environment Variables
1. Open the file `.env.local` in the project root
2. Replace `your_app_password_here` with the generated app password (remove spaces):
   ```
   EMAIL_USER=pantprachi58@gmail.com
   EMAIL_PASS=xxxxxxxxxxxxxxxx
   ```

### 4. Test the Contact Form
1. Start the development server: `npm run dev`
2. Go to the contact page
3. Fill out the form and submit
4. Check the `pantprachi58@gmail.com` inbox for the test email

## Troubleshooting

### If emails are not sending:
1. Check the browser console for errors
2. Check the server logs for API errors
3. Verify the app password is correct (no spaces)
4. Ensure 2-Step Verification is enabled on the Google account

### Security Notes:
- Never commit the `.env.local` file to version control
- The app password is specific to this application and can be revoked anytime
- If the password is compromised, revoke it immediately and generate a new one

## Map Configuration

The Google Maps embed shows the location:
**LGF-25 Ajnara Arcade, Crossings Republik, Ghaziabad, Uttar Pradesh 201016**

To update the map location:
1. Go to https://www.google.com/maps
2. Search for your location
3. Click "Share" > "Embed a map"
4. Copy the iframe code
5. Update the iframe `src` in `components/Contact.js`