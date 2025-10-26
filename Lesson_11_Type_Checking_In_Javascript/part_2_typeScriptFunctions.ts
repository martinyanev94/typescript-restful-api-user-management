function logId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}

logId(101); // Output: Your ID is: 101
logId("A123"); // Output: Your ID is: A123
function isString(value: any): value is string {
    return typeof value === "string";
}

let sample: any = "Hello, TypeScript!";

if (isString(sample)) {
    console.log(sample.toUpperCase()); // Output: HELLO, TYPESCRIPT!
}
