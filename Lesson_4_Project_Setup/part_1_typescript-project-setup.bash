node -v
mkdir my-typescript-project
cd my-typescript-project
npm init -y
npm install typescript --save-dev
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": [
    "./src/**/*"
  ]
}
