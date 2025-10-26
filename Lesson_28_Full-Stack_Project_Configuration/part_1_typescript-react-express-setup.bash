cd ../client
npm init -y
npx create-react-app . --template typescript
npm install typescript --save-dev
npm install @types/react @types/react-dom --save-dev
npx tsc --init
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "outDir": "./build",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
}
// shared/User.ts

export interface User {
  id: number;
  name: string;
  email: string;
}
// server/src/app.ts

import express from 'express';
import { User } from '../../shared/User';

const app = express();
const PORT = 3000;

app.use(express.json());

let users: User[] = [];

app.post('/users', (req, res) => {
  const newUser: User = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
npx ts-node src/app.ts
