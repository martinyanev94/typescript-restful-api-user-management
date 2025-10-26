function calculateTotal(numbers: number[]): number {
    return numbers.reduce((total, current) => total + current, 0);
}

console.log(calculateTotal([1, 2, 3, 4, 5])); // Outputs: 15
// console.log(calculateTotal([1, "2", 3])); This will throw a compile-time error
type UserTuple = [string, number];

function createUser(user: UserTuple): void {
    console.log(`Name: ${user[0]}, Age: ${user[1]}`);
}

createUser(["Alice", 30]); // Valid
// createUser([30, "Alice"]); This will throw a compile-time error
