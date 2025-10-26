npm install express
npm install --save-dev @types/express ts-node nodemon typescript
npx tsc --init
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "typeRoots": [
      "./node_modules/@types"
    ]
  },
  "include": ["src/**/*"]
}
