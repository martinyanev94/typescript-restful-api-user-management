function formatValue(value: string | number): string {
    return typeof value === 'string' ? value.toUpperCase() : value.toFixed(2);
}

console.log(formatValue(23.456)); // Output: "23.46"
console.log(formatValue("hello")); // Output: "HELLO"
