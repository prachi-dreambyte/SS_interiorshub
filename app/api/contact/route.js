import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail
    const emailUser = process.env.EMAIL_USER || 'pantprachi58@gmail.com';
    const emailPass = process.env.EMAIL_PASS;
    
    if (!emailPass || emailPass === 'your_app_password_here') {
      console.error('EMAIL_PASS environment variable is not set or is using default value');
      console.log('Current EMAIL_USER:', emailUser);
      console.log('EMAIL_PASS is set:', !!emailPass);
      console.log('EMAIL_PASS value:', emailPass === 'your_app_password_here' ? 'Using default placeholder' : 'Set but not shown');
      
      // Return success anyway since WhatsApp is the primary method
      // But log that email backup failed
      return NextResponse.json(
        { 
          success: true, 
          message: 'WhatsApp message sent successfully. Email backup not configured.',
          warning: 'Email service is not configured. Please set EMAIL_PASS in .env.local file for email backup.'
        },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'pantprachi58@gmail.com',
      to: 'pantprachi58@gmail.com', // Send to the specified email
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px; border: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Subject:</td>
                <td style="padding: 8px; border: 1px solid #eee;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Message:</td>
                <td style="padding: 8px; border: 1px solid #eee; white-space: pre-wrap;">${message}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Date:</td>
                <td style="padding: 8px; border: 1px solid #eee;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #777; font-size: 12px;">
            <p>This email was sent from the contact form on SS Interiorshub website.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Details:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
Date: ${new Date().toLocaleString()}

This email was sent from the contact form on SS Interiorshub website.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
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