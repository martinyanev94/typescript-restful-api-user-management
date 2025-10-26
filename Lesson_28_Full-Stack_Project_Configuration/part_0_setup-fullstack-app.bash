mkdir my-fullstack-app
cd my-fullstack-app
mkdir client server
mkdir shared
cd server
npm init -y
npm install express
npm install --save-dev typescript @types/node @types/express ts-node
npx tsc --init
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
