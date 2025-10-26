import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, without types!');
}); // TypeScript will complain about unknown req and res types.
