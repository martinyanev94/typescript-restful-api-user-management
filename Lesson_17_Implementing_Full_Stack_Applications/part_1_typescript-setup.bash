cd server
npm init -y
npm install --save-dev typescript
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "../dist/server",
    "strict": true,
    "esModuleInterop": true
  }
}
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "rootDir": "./",
    "outDir": "../dist/client",
    "strict": true,
    "esModuleInterop": true,
    "lib": ["DOM", "ESNext"]
  }
}
