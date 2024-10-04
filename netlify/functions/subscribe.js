// netlify/functions/subscribe.js

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
        
        // Simulate saving to a database
        // await saveEmailToDatabase(email);
  
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
  