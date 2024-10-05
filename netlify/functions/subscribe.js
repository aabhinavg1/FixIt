const axios = require('axios');

// Function to validate email with a regex pattern
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to verify email using an external API (replace with an actual service)
const verifyEmailExists = async (email) => {
  try {
    const response = await axios.get(`https://emailverificationapi.com/verify?email=${email}&apikey=YOUR_API_KEY`);
    return response.data.exists; // Assume the API returns { exists: true/false }
  } catch (error) {
    console.error('Email verification failed:', error.message);
    return false;
  }
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { email } = JSON.parse(event.body);

  // Check if email is valid
  if (!email || !isValidEmail(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid email format' }),
    };
  }

  // Check if the email exists using an external service
  const emailExists = await verifyEmailExists(email);

  if (!emailExists) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email does not exist' }),
    };
  }

  try {
    await axios.post('https://compilersutraserver.glitch.me/save-email', { email });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully subscribed!' }),
    };
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: errorMessage }),
    };
  }
};
