function createArray<T>(length: number, value: T): Array<T> {
    return Array.from({ length }, () => value);
}

const numberArray = createArray<number>(3, 7); // [7, 7, 7]
const stringArray = createArray<string>(2, "Hello"); // ["Hello", "Hello"]

console.log(numberArray);
console.log(stringArray);
