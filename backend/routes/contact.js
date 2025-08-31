const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Simple contact submissions storage (no database)
let contactSubmissions = [];

// Create nodemailer transporter (placeholder configuration)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'placeholder@gmail.com',
    pass: process.env.EMAIL_PASS || 'placeholder-password'
  }
});

// Submit contact form
router.post('/submit', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields'
    });
  }
  
  // Store submission
  const submission = {
    id: contactSubmissions.length + 1,
    name,
    email,
    phone: phone || '',
    subject,
    message,
    submittedAt: new Date(),
    status: 'received'
  };
  
  contactSubmissions.push(submission);
  
  // For now, just log the contact form (email will work when you configure real credentials)
  console.log('📧 Contact form submission:', {
    from: `${name} <${email}>`,
    subject: subject,
    message: message
  });
  
  try {
    // Email sending (currently disabled for placeholder)
    // await transporter.sendMail({
    //   from: process.env.EMAIL_FROM,
    //   to: process.env.EMAIL_TO,
    //   subject: `NHRCCB Contact: ${subject}`,
    //   html: `
    //     <h3>New Contact Form Submission</h3>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `
    // });
    
    res.json({
      success: true,
      message: 'Thank you for your message! We have received your inquiry and will get back to you soon.',
      submissionId: submission.id
    });
  } catch (error) {
    console.error('Email error (expected with placeholder config):', error.message);
    res.json({
      success: true,
      message: 'Your message has been received! (Email configuration needed for actual sending)'
    });
  }
});

module.exports = router;
