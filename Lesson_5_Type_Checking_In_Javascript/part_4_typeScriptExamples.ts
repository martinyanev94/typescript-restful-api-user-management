function printId(id: number | string): void {
    console.log(`Your ID is: ${id}`);
}

printId(101); // Outputs: Your ID is: 101
printId("202"); // Outputs: Your ID is: 202
let randomValue: any = "This is a string";
let strLength: number = (randomValue as string).length;

console.log(`String length: ${strLength}`); // Outputs: String length: 18
