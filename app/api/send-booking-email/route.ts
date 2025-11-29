import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, persons, days, children, packageName, message } = body;

    // Email to admin
    const adminEmail = await resend.emails.send({
      from: 'Mihith Lanka Tours <noreply@notifications.mihithlankatours.com>',
      to: 'mihithlankatourstravels@gmail.com',
      replyTo: email,
      subject: `New Booking Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
                line-height: 1.6; 
                color: #000000; 
                background-color: #f3f3f3;
                padding: 40px 20px;
              }
              .email-wrapper { 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: #ffffff;
                border-radius: 2px;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
              }
              .header { 
                background-color: #000000;
                color: #ffffff;
                padding: 40px 40px 35px;
                border-bottom: 1px solid #e5e5e5;
              }
              .header h1 { 
                font-size: 24px; 
                font-weight: 400; 
                margin-bottom: 8px;
                letter-spacing: -0.5px;
              }
              .header p { 
                font-size: 14px; 
                color: #a3a3a3;
                font-weight: 300;
              }
              .content { 
                padding: 40px;
                background-color: #ffffff;
              }
              .info-grid {
                border-top: 1px solid #f3f3f3;
                margin-top: 30px;
              }
              .info-row { 
                padding: 24px 0;
                border-bottom: 1px solid #f3f3f3;
                display: table;
                width: 100%;
              }
              .info-label { 
                font-size: 11px;
                font-weight: 600;
                color: #737373;
                text-transform: uppercase;
                letter-spacing: 0.8px;
                margin-bottom: 8px;
                display: block;
              }
              .info-value { 
                font-size: 15px;
                color: #000000;
                font-weight: 400;
                line-height: 1.5;
              }
              .info-value a {
                color: #000000;
                text-decoration: none;
              }
              .message-box {
                background-color: #fafafa;
                border-left: 2px solid #000000;
                padding: 20px;
                margin-top: 12px;
                font-size: 14px;
                line-height: 1.7;
                color: #262626;
                white-space: pre-wrap;
                font-family: 'Courier New', monospace;
              }
              .tag {
                display: inline-block;
                background-color: #000000;
                color: #ffffff;
                padding: 6px 14px;
                border-radius: 2px;
                font-size: 13px;
                font-weight: 500;
                letter-spacing: 0.3px;
              }
              .footer { 
                background-color: #fafafa;
                padding: 30px 40px;
                text-align: center;
                border-top: 1px solid #e5e5e5;
              }
              .footer-text {
                font-size: 12px;
                color: #737373;
                line-height: 1.6;
              }
              .footer-text strong {
                color: #000000;
                font-weight: 500;
              }
            </style>
          </head>
          <body>
            <div class="email-wrapper">
              <div class="header">
                <h1>New Booking Request</h1>
                <p>Received ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
              </div>
              
              <div class="content">
                <p style="font-size: 14px; color: #737373; margin-bottom: 20px;">
                  You have received a new booking request. Please respond within 24 hours.
                </p>
                
                <div class="info-grid">
                  <div class="info-row">
                    <span class="info-label">Customer Name</span>
                    <div class="info-value">${name}</div>
                  </div>
                  
                  <div class="info-row">
                    <span class="info-label">Email Address</span>
                    <div class="info-value">
                      <a href="mailto:${email}">${email}</a>
                    </div>
                  </div>
                  
                  <div class="info-row">
                    <span class="info-label">Phone Number</span>
                    <div class="info-value">
                      <a href="tel:${phone}">${phone}</a>
                    </div>
                  </div>
                  
                  ${packageName ? `
                  <div class="info-row">
                    <span class="info-label">Package Selected</span>
                    <div class="info-value">
                      <span class="tag">${packageName}</span>
                    </div>
                  </div>
                  ` : ''}
                  
                  <div class="info-row">
                    <span class="info-label">Travel Date</span>
                    <div class="info-value">${new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                  
                  <div class="info-row">
                    <span class="info-label">Number of Travelers</span>
                    <div class="info-value">${persons} Adults${children ? `, ${children} Children` : ''}</div>
                  </div>
                  
                  <div class="info-row">
                    <span class="info-label">Duration</span>
                    <div class="info-value">${days} Days</div>
                  </div>
                  
                  ${message ? `
                  <div class="info-row" style="border-bottom: none;">
                    <span class="info-label">Additional Notes</span>
                    <div class="message-box">${message}</div>
                  </div>
                  ` : ''}
                </div>
              </div>
              
              <div class="footer">
                <p class="footer-text">
                  <strong>Mihith Lanka Tours & Travels</strong><br>
                  Waligama, Matara, Sri Lanka
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Email to customer
    const customerEmail = await resend.emails.send({
      from: 'Mihith Lanka Tours <noreply@notifications.mihithlankatours.com>',
      to: email,
      subject: 'Thank you for your booking request',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
                line-height: 1.6; 
                color: #000000; 
                background-color: #f3f3f3;
                padding: 40px 20px;
              }
              .email-wrapper { 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: #ffffff;
                border-radius: 2px;
                overflow: hidden;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
              }
              .header { 
                background-color: #000000;
                color: #ffffff;
                padding: 50px 40px;
                text-align: center;
              }
              .header h1 { 
                font-size: 28px; 
                font-weight: 300; 
                margin-bottom: 10px;
                letter-spacing: -0.5px;
              }
              .header p { 
                font-size: 15px; 
                color: #a3a3a3;
                font-weight: 300;
              }
              .content { 
                padding: 45px 40px;
                background-color: #ffffff;
              }
              .greeting {
                font-size: 16px;
                color: #000000;
                margin-bottom: 25px;
                font-weight: 400;
              }
              .text-block {
                font-size: 15px;
                color: #404040;
                line-height: 1.8;
                margin-bottom: 20px;
              }
              .highlight-box {
                background-color: #fafafa;
                border: 1px solid #e5e5e5;
                padding: 30px;
                margin: 35px 0;
                border-radius: 2px;
              }
              .highlight-box h3 {
                font-size: 14px;
                font-weight: 600;
                color: #000000;
                margin-bottom: 20px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .summary-item {
                padding: 15px 0;
                border-bottom: 1px solid #e5e5e5;
              }
              .summary-item:last-child {
                border-bottom: none;
              }
              .summary-label {
                font-size: 11px;
                font-weight: 600;
                color: #737373;
                text-transform: uppercase;
                letter-spacing: 0.8px;
                display: block;
                margin-bottom: 6px;
              }
              .summary-value {
                font-size: 14px;
                color: #000000;
                line-height: 1.6;
              }
              .contact-section {
                margin-top: 40px;
                padding-top: 40px;
                border-top: 1px solid #e5e5e5;
              }
              .contact-section h3 {
                font-size: 16px;
                font-weight: 500;
                color: #000000;
                margin-bottom: 25px;
                text-align: center;
              }
              .contact-item {
                padding: 18px 20px;
                background-color: #fafafa;
                margin-bottom: 10px;
                border-radius: 2px;
                font-size: 14px;
                color: #404040;
              }
              .contact-item strong {
                color: #000000;
                font-weight: 500;
                display: inline-block;
                min-width: 90px;
              }
              .contact-item a {
                color: #000000;
                text-decoration: none;
                border-bottom: 1px solid #e5e5e5;
              }
              .button {
                display: inline-block;
                background-color: #25D366;
                color: #ffffff;
                padding: 14px 32px;
                text-decoration: none;
                border-radius: 2px;
                font-weight: 400;
                font-size: 14px;
                letter-spacing: 0.3px;
                margin-top: 25px;
              }
              .cta-section {
                text-align: center;
                margin: 35px 0;
              }
              .footer { 
                background-color: #fafafa;
                padding: 40px;
                text-align: center;
                border-top: 1px solid #e5e5e5;
              }
              .footer h3 {
                font-size: 16px;
                font-weight: 500;
                color: #000000;
                margin-bottom: 8px;
              }
              .footer p {
                font-size: 13px;
                color: #737373;
                margin: 5px 0;
              }
              .closing-note {
                font-size: 14px;
                color: #737373;
                text-align: center;
                margin-top: 35px;
                padding-top: 25px;
                border-top: 1px solid #e5e5e5;
                line-height: 1.7;
              }
            </style>
          </head>
          <body>
            <div class="email-wrapper">
              <div class="header">
                <h1>Booking Request Received</h1>
                <p>We've received your booking request</p>
              </div>
              
              <div class="content">
                <p class="greeting">Dear ${name.split(' ')[0]},</p>
                
                <p class="text-block">
                  Thank you for choosing <strong>Mihith Lanka Tours & Travels</strong> for your Sri Lankan adventure. We're excited to help you create an unforgettable experience.
                </p>
                
                <p class="text-block">
                  Our travel specialists are currently reviewing your booking request and will prepare a detailed itinerary tailored to your preferences. You can expect to hear from us within <strong>24 hours</strong>.
                </p>
                
                <div class="highlight-box">
                  <h3>Booking Summary</h3>
                  
                  ${packageName ? `
                  <div class="summary-item">
                    <span class="summary-label">Package</span>
                    <div class="summary-value">${packageName}</div>
                  </div>
                  ` : ''}
                  
                  <div class="summary-item">
                    <span class="summary-label">Travel Date</span>
                    <div class="summary-value">${new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                  
                  <div class="summary-item">
                    <span class="summary-label">Travelers</span>
                    <div class="summary-value">${persons} Adults${children ? `, ${children} Children` : ''}</div>
                  </div>
                  
                  <div class="summary-item">
                    <span class="summary-label">Duration</span>
                    <div class="summary-value">${days} Days</div>
                  </div>
                  
                  ${message ? `
                  <div class="summary-item">
                    <span class="summary-label">Your Notes</span>
                    <div class="summary-value" style="margin-top: 8px; padding: 12px; background: #ffffff; border-radius: 2px;">${message}</div>
                  </div>
                  ` : ''}
                </div>

                <div class="contact-section">
                  <h3>Need Immediate Assistance?</h3>
                  
                  <div class="contact-item">
                    <strong>Phone</strong>
                    <a href="tel:+94777288286">+94 777 288 286</a>
                  </div>
                  
                  <div class="contact-item">
                    <strong>Email</strong>
                    <a href="mailto:info@mihithlankatours.com">info@mihithlankatours.com</a>
                  </div>
                  
                  <div class="contact-item">
                    <strong>WhatsApp</strong>
                    <a href="https://wa.me/94777288286">+94 777 288 286</a>
                  </div>
                  
                  <div class="contact-item">
                    <strong>Location</strong>
                    Waligama, Matara, Sri Lanka
                  </div>
                </div>

                <div class="cta-section">
                  <a href="https://wa.me/94777288286" class="button">Contact via WhatsApp</a>
                </div>

                <p class="closing-note">
                  We look forward to creating an exceptional Sri Lankan experience for you.
                </p>
              </div>
              
              <div class="footer">
                <h3>Mihith Lanka Tours & Travels</h3>
                <p>Creating Unforgettable Sri Lankan Experiences</p>
                <p style="margin-top: 15px; font-size: 12px;">Waligama, Matara, Sri Lanka</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Booking emails sent successfully',
      adminEmailId: adminEmail.data?.id,
      customerEmailId: customerEmail.data?.id
    });
    
  } catch (error: any) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error?.message || 'Unknown error'
    }, { status: 500 });
  }
}
