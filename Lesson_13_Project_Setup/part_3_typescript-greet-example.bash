mkdir src
mkdir dist
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("TypeScript Enthusiast"));
npx tsc
"use strict";
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("TypeScript Enthusiast"));
node dist/index.js
