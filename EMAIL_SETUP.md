# Email Setup Instructions

## Setup Google SMTP for Nodemailer

### 1. Create App-Specific Password for Gmail

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords** (you'll find this in the Security section)
5. Select **Mail** and **Other (Custom name)**
6. Name it "Novaro Solutions"
7. Click **Generate**
8. Copy the 16-character password

### 2. Create .env.local file

Create a `.env.local` file in the root directory:

```bash
# Email Configuration
SMTP_EMAIL=your-gmail@gmail.com
SMTP_PASSWORD=your-16-character-app-password
ADMIN_EMAIL=admin@novaro.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Replace:**
- `your-gmail@gmail.com` - Your Gmail address
- `your-16-character-app-password` - The app password from step 1
- `admin@novaro.com` - Email where you want to receive submissions
- Update the site URL for production

### 3. Install nodemailer

Run this command in your terminal:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 4. Test the Setup

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form
4. Submit

You should receive:
- **Admin email** with all form details
- **User confirmation email** with next steps

### 5. Troubleshooting

**If emails aren't sending:**

1. Check your `.env.local` file exists in the root directory
2. Verify the app password is correct (no spaces)
3. Make sure 2-Step Verification is enabled on your Google account
4. Check console for error messages
5. Verify SMTP_EMAIL and ADMIN_EMAIL are correct

**Common Issues:**

- "Invalid login" → App password incorrect or 2FA not enabled
- "Connection timeout" → Check your internet connection
- "Quota exceeded" → Gmail has daily sending limits (500 emails/day for free accounts)

### 6. Production Deployment

When deploying to production (Vercel, etc.):

1. Add all environment variables to your hosting platform
2. Update `NEXT_PUBLIC_SITE_URL` to your production URL
3. Consider using a professional email service like:
   - SendGrid
   - Amazon SES
   - Mailgun
   - Postmark

These services offer better deliverability and higher sending limits.

## Features Implemented

✅ Admin receives detailed email with all form data
✅ User receives beautiful confirmation email
✅ Form validation
✅ Loading state during submission
✅ Success/error messages
✅ Form reset after successful submission
✅ Dark mode support
✅ Professional HTML email templates
✅ Responsive email design

## Email Preview

**Admin Email includes:**
- Full name, email, company, phone
- Service interest
- Ticket volume (if provided)
- Complete message
- Formatted with Novaro brand colors

**User Confirmation includes:**
- Personalized greeting
- Confirmation of receipt
- What happens next (timeline)
- Contact information
- Link back to website
- Professional branding
