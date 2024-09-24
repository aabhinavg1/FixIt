// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { email } = req.body;
  const msg = {
    to: email, // Send to the email submitted by the user
    from: 'tiwariabhinavak@gmail.com', // Change to your verified sender
    subject: 'Welcome to Our Newsletter!',
    text: 'Thank you for subscribing to our newsletter!',
    html: '<strong>Thank you for subscribing to our newsletter!</strong>',
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
