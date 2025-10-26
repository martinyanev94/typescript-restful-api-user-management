function getLastItem<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

const numbers = [1, 2, 3, 4];
const lastNumber = getLastItem(numbers);
console.log(`The last number is: ${lastNumber}`);

const strings = ["apple", "banana", "cherry"];
const lastString = getLastItem(strings);
console.log(`The last string is: ${lastString}`);
