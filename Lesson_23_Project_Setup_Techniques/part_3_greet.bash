$ mkdir src
$ touch index.ts
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("World"));
$ npx tsc
