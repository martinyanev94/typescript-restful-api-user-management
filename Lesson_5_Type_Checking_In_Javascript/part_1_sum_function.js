function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10)); // Outputs: 15
console.log(sum("5", "10")); // Outputs: 510
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 10)); // Outputs: 15
// console.log(sum("5", "10")); This will throw a compile-time error
