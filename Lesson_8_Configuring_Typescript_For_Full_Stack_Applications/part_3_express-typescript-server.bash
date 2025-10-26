npm install body-parser cors
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});

// More routes will go here.

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
