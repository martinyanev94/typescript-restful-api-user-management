npm install dotenv --save-dev
API_KEY=your_api_key_here
import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;

console.log(`Your API key is: ${apiKey}`);
