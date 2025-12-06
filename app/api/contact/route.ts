import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, company, phone, interest, ticketVolume, message } = body;

    // Validate required fields
    if (!fullName || !email || !company || !phone || !interest || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Create transporter using Google SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to Admin
    const adminMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0A2540 0%, #00A8E1 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f7fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #00A8E1; border-radius: 5px; }
              .label { font-weight: bold; color: #0A2540; margin-bottom: 5px; }
              .value { color: #4A5568; }
              .footer { text-align: center; margin-top: 20px; color: #4A5568; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>Novaro Global Limited</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name:</div>
                  <div class="value">${fullName}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Interested In:</div>
                  <div class="value">${interest}</div>
                </div>
                ${ticketVolume ? `
                <div class="field">
                  <div class="label">Estimated Monthly Ticket Volume:</div>
                  <div class="value">${ticketVolume}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from your Novaro Solutions contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Email to User (Confirmation)
    const userMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Thank You for Contacting Novaro Global Limited',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0A2540 0%, #00A8E1 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f7fafc; padding: 40px; border-radius: 0 0 10px 10px; }
              .message { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; }
              .button { display: inline-block; padding: 15px 30px; background: linear-gradient(135deg, #00A8E1 0%, #0BC5EA 100%); color: white; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
              .footer { text-align: center; margin-top: 30px; color: #4A5568; font-size: 12px; border-top: 1px solid #ddd; padding-top: 20px; }
              .info-box { background: #e6f7ff; border-left: 4px solid #00A8E1; padding: 15px; margin: 20px 0; border-radius: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You, ${fullName}!</h1>
                <p>We've received your message</p>
              </div>
              <div class="content">
                <div class="message">
                  <h2 style="color: #0A2540; margin-top: 0;">Your Message Has Been Received</h2>
                  <p>Thank you for reaching out to Novaro Global Limited. We appreciate your interest in our services.</p>
                  <p>Our team is reviewing your inquiry and will get back to you within <strong>24 hours</strong>.</p>
                </div>
                
                <div class="info-box">
                  <h3 style="color: #0A2540; margin-top: 0;">What Happens Next?</h3>
                  <ol style="margin: 10px 0; padding-left: 20px;">
                    <li>A solution specialist will review your requirements</li>
                    <li>We'll schedule a discovery call to discuss your needs</li>
                    <li>You'll receive a custom proposal tailored to your business</li>
                    <li>Once approved, we begin onboarding immediately</li>
                  </ol>
                </div>

                <div style="text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://novaro.com'}" class="button">Visit Our Website</a>
                </div>

                <div class="message">
                  <h3 style="color: #0A2540;">Your Submission Details:</h3>
                  <p><strong>Company:</strong> ${company}</p>
                  <p><strong>Service Interest:</strong> ${interest}</p>
                  ${ticketVolume ? `<p><strong>Ticket Volume:</strong> ${ticketVolume}</p>` : ''}
                </div>

                <p style="color: #4A5568;">If you have any urgent questions, feel free to call us at <strong>+1 (555) 123-4567</strong></p>
              </div>
              <div class="footer">
                <p><strong>Novaro Global Limited</strong></p>
                <p>123 Business Park, Suite 400, City, Country</p>
                <p>Email: hello@novaro.com | Phone: +1 (555) 123-4567</p>
                <p style="margin-top: 15px; font-size: 11px;">© ${new Date().getFullYear()} Novaro Global Limited. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
