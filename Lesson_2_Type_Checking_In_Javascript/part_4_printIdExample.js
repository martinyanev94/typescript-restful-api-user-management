function printId(id) {
    console.log(`Your ID is: ${id}`);
}
function printId(id: number | string): void {
    console.log(`Your ID is: ${id}`);
}
printId(123); // Valid call
printId("ABC"); // Also a valid call
