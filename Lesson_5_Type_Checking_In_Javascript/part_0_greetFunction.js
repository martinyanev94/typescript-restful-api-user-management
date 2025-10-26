function greet(user) {
    return "Hello, " + user;
}

console.log(greet(42)); // Outputs: Hello, 42
function greet(user: string): string {
    return "Hello, " + user;
}

console.log(greet(42)); // TypeError: Argument of type 'number' is not assignable to parameter of type 'string'
