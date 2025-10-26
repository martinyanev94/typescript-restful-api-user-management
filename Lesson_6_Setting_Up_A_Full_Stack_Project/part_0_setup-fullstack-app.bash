mkdir fullstack-app
cd fullstack-app
npm init -y
npm install typescript express
npm install --save-dev @types/node @types/express
npx tsc --init
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
