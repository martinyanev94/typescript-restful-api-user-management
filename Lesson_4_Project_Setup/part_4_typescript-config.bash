npm install typescript --save-dev
npm install @types/react @types/react-dom --save-dev
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": [
    "./src/**/*",
    "./**/*.js"
  ],
  "exclude": [
    "node_modules"
  ]
}
