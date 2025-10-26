$ npm install express
$ npm install --save-dev @types/express
$ touch server.ts
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
$ npx tsc
$ node dist/server.js
