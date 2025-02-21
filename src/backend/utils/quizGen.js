import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;

async function callClaude() {
    try {
        const response = await axios.post('https://api.anthropic.com/v1/messages', {
            model: 'claude-3-5-sonnet-20241022',
            messages: [
                { role: 'user', content: 'Hello, Claude!' }
            ],
            max_tokens: 100
        }, {
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json'
            }
        });

        console.log('Response from Claude:', response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error response from Claude API:', error.response.data);
            console.error('Status code:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received from Claude API:', error.request);
        } else {
            console.error('Error setting up the request:', error.message);
        }
        console.error('Config:', error.config);
    }
}

callClaude();