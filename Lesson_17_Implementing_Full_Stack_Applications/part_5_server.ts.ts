export interface Message {
    message: string;
}
import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { Message } from '../shared/types';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist/client')));

app.get('/api/data', (req: Request, res: Response<Message>) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
