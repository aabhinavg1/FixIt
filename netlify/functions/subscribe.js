const axios = require('axios');

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
      // Send the email to the local server
      await axios.post('http://localhost:3001/save-email', { email });

      console.log(`Email subscribed: ${email}`);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Successfully subscribed!' }),
      };
    } catch (error) {
      console.error('Error subscribing email:', error.response ? error.response.data : error.message);
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
