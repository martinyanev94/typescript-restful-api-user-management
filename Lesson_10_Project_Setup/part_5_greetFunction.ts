const greet = (name: string | null) => {
    if (name === null) {
        throw new Error("Name cannot be null.");
    }
    return `Hello, ${name}!`;
}
