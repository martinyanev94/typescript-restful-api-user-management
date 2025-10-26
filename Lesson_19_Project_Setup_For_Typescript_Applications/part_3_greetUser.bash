mkdir src
touch src/app.ts
function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

const userName: string = "Alice";
console.log(greet(userName));
