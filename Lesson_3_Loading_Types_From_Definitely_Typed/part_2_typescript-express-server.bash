npm install express
npm install --save-dev @types/express
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
