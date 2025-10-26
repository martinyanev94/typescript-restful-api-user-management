npm init -y
npm install --save-dev typescript
npx tsc --init
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
