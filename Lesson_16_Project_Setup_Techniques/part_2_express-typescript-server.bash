npm install express
npm install --save-dev @types/express
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is my Express server with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
npx tsc
node dist/server.js
