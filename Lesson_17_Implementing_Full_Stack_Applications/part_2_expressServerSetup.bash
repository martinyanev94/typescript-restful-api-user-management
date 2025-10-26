npm install express
npm install --save-dev @types/express
import express from 'express';
import { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist/client')));

app.get('/api/data', (req: Request, res: Response) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
