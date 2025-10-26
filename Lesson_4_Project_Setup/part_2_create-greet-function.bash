mkdir src
touch src/index.ts
function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript!`;
}

const user = "Student";
console.log(greet(user));
npx tsc
