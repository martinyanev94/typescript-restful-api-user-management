mkdir src
const greet = (name: string): string => {
    return `Hello, ${name}! Welcome to the world of TypeScript!`;
};

console.log(greet("TypeScript Developer"));
npx tsc
node dist/index.js
