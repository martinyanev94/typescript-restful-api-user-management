interface User {
    name: string;
    age: number;
}

function printUser(user: User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const user1 = { name: "Alice", age: 30 };
printUser(user1); // Valid

// This will throw a compile-time error
const user2 = { name: "Bob" }; 
// printUser(user2);
interface User {
    name: string;
    age?: number; // This property is optional
}

function printUser(user: User): void {
    console.log(`Name: ${user.name}, Age: ${user.age ? user.age : "not specified"}`);
}

const user1 = { name: "Alice" };
printUser(user1); // Outputs: Name: Alice, Age: not specified
