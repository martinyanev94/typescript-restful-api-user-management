node dist/index.js
│
├── client
│   ├── tsconfig.json
│   └── ... (other client files)
│
├── server
│   ├── tsconfig.json
│   └── ... (other server files)
│
├── shared
│   ├── tsconfig.json
│   └── ... (shared types/interfaces)
│
├── src
│   └── index.ts
└── package.json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "ESNext"],
    "module": "ESNext",
    "outDir": "../dist/client",
    "strict": true
  }
}
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "commonjs",
    "outDir": "../dist/server",
    "types": ["node"],
    "strict": true
  }
}
