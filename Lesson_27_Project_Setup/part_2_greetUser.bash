mkdir src
function greetUser(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

const user = "Alice";
console.log(greetUser(user));
npx tsc
node src/index.js
