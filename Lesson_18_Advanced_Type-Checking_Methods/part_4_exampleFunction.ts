function example(value: number | string) {
    if (typeof value === 'string') {
        console.log(`String of length ${value.length}`);
    } else {
        console.log(`Number squared: ${value ** 2}`);
    }
}
