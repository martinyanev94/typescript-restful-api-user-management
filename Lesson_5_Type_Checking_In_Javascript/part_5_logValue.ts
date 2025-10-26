function logValue<T>(value: T): void {
    console.log(value);
}

logValue<number>(123); // Outputs: 123
logValue<string>("Hello, world!"); // Outputs: Hello, world!
