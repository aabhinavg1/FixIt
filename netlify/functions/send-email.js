// netlify/functions/send-email.js
const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { email } = JSON.parse(event.body);

    try {
      await client.query(
        q.Create(
          q.Collection('subscribers'), // Ensure this collection exists in your FaunaDB
          { data: { email } }
        )
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Subscription successful!' }),
      };
    } catch (error) {
      console.error('Error saving email:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error saving email!' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method Not Allowed' }),
  };
};
