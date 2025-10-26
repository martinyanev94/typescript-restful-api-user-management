mkdir src
touch src/index.ts
const greet = (name: string) => {
    return `Hello, ${name}!`;
}

console.log(greet("TypeScript Student"));
npx tsc
