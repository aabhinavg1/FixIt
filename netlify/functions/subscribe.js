// netlify/functions/subscribe.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { email } = JSON.parse(event.body);

    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid email' }),
      };
    }

    try {
      console.log(`Email subscribed: ${email}`);

      // Save the email to a local file (this works only when running locally)
      const filePath = path.join(__dirname, 'emails.txt'); // Store in the same directory as the function
      fs.appendFileSync(filePath, `${email}\n`, (err) => {
        if (err) {
          throw err; // This will be caught in the catch block
        }
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Successfully subscribed!' }),
      };
    } catch (error) {
      console.error('Error subscribing email:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method Not Allowed' }),
  };
};
