// local-server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Endpoint to save email
app.post('/save-email', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  // Save the email to a local file
  const filePath = path.join(__dirname, 'emails.txt'); // Adjust the path if necessary
  fs.appendFile(filePath, `${email}\n`, (err) => {
    if (err) {
      console.error('Error saving email:', err);
      return res.status(500).json({ message: 'Error saving email' });
    }
    console.log(`Email saved: ${email}`);
    res.status(200).json({ message: 'Email successfully saved!' });
  });
});

app.listen(PORT, () => {
  console.log(`Local server running at http://localhost:${PORT}`);
});