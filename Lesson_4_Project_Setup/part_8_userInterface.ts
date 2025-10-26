interface User {
    name: string;
    age: number;
}

function printUser(user: User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const user: User = { name: "Alice", age: 30 };
printUser(user);
