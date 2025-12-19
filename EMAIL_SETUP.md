# Email Setup Instructions

## 🚀 Quick Setup (PrivateEmail.com)

**Create `.env.local` in your project root:**

```bash
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_EMAIL=your-email@yourdomain.com
SMTP_PASSWORD=your-password
ADMIN_EMAIL=admin@yourdomain.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace the credentials with your actual PrivateEmail details, then run `npm run dev` and test!

---

## Setup SMTP for Nodemailer with PrivateEmail.com

### 1. Get Your PrivateEmail SMTP Credentials

1. Log in to your **PrivateEmail** account
2. Go to **Email Settings** or **SMTP Settings**
3. Note down your SMTP server details:
   - **SMTP Server**: `mail.privateemail.com`
   - **SMTP Port**: `465` (SSL/TLS) or `587` (STARTTLS)
   - **Username**: Your full email address (e.g., `your-email@yourdomain.com`)
   - **Password**: Your email account password

### 2. Create .env.local file

Create a `.env.local` file in the root directory:

```bash
# Email Configuration for PrivateEmail
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_EMAIL=your-email@yourdomain.com
SMTP_PASSWORD=your-email-password
ADMIN_EMAIL=admin@yourdomain.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Replace:**
- `your-email@yourdomain.com` - Your PrivateEmail address (this will be the sender)
- `your-email-password` - Your PrivateEmail account password
- `admin@yourdomain.com` - Email where you want to receive contact form submissions
- Update the site URL for production

**Port Options:**
- Use **Port 465** with `SMTP_SECURE=true` for SSL/TLS (Recommended)
- Use **Port 587** with `SMTP_SECURE=false` for STARTTLS (Alternative)

### 3. Install nodemailer (if not already installed)

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
2. Verify all SMTP credentials are correct (no spaces)
3. Confirm the SMTP host is `mail.privateemail.com`
4. Check console for error messages
5. Verify SMTP_EMAIL and ADMIN_EMAIL are correct
6. Try switching between port 465 and 587 if one doesn't work

**Common Issues:**

- **"Invalid login"** → Email/password incorrect or account not active
- **"Connection timeout"** → Check SMTP_HOST and SMTP_PORT are correct
- **"Self-signed certificate"** → Try setting port to 587 with `SMTP_SECURE=false`
- **"Authentication failed"** → Double-check your PrivateEmail password

**PrivateEmail Specific Settings:**
- **SMTP Host**: `mail.privateemail.com` (NOT smtp.privateemail.com)
- **Username**: Must be your FULL email address
- **SSL/TLS (Port 465)**: Most reliable for PrivateEmail
- **STARTTLS (Port 587)**: Alternative if 465 doesn't work

### 6. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add all environment variables to your hosting platform:
   ```
   SMTP_HOST=mail.privateemail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_EMAIL=your-email@yourdomain.com
   SMTP_PASSWORD=your-password
   ADMIN_EMAIL=admin@yourdomain.com
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```
2. Update `NEXT_PUBLIC_SITE_URL` to your production URL
3. Test the contact form after deployment

**Alternative Email Services:**
If you need higher volumes or better deliverability, consider:
- SendGrid
- Amazon SES
- Mailgun
- Postmark
- Resend

### 7. Security Best Practices

🔒 **Important:**
- Never commit `.env.local` to Git (already in .gitignore)
- Use strong passwords for your email account
- Enable 2FA on your PrivateEmail account if available
- Regularly rotate your email password
- Monitor your email sending logs

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
