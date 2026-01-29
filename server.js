import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow all CORS for dev
app.use(express.json());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Email Configuration
import nodemailer from 'nodemailer';

// REPLACE THESE WITH YOUR ACTUAL DETAILS
const EMAIL_USER = 'cheshtapruthi2502@gmail.com';
const EMAIL_PASS = 'pppb sxba srcz vlud'; // Generate App Password here: https://myaccount.google.com/apppasswords

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

if (EMAIL_PASS === 'YOUR_GMAIL_APP_PASSWORD') {
  console.error("CRITICAL ERROR: You have not replaced 'YOUR_GMAIL_APP_PASSWORD' in server.js with your actual App Password.");
  console.error("Emails will NOT send until you fix this file.");
}

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { Name, Email, Message } = req.body;
  console.log(`Received message from ${Name} (${Email})`);

  const mailOptions = {
    from: EMAIL_USER, // Sender address (must be same as auth user for Gmail)
    to: 'cheshtapruthi2502@gmail.com', // Your email where you want to receive messages
    replyTo: Email, // The user's email so you can reply to them
    subject: `Portfolio Contact: ${Name}`,
    text: `You have a new message from your portfolio website:\n\nName: ${Name}\nEmail: ${Email}\n\nMessage:\n${Message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.code === 'EAUTH') {
      console.error("Authentication failed. Please check your Email and App Password in server.js.");
    }
    res.status(500).json({ success: false, message: "Failed to send email. Check server logs for details." });
  }
});

// Handle client-side routing - convert any other route to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend Server running on http://localhost:${PORT}`);
});
