const numbers = [1, 2, 3, 4, 5];
numbers.push("6");
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6); // Works fine
numbers.push("7"); // Compile-time error
