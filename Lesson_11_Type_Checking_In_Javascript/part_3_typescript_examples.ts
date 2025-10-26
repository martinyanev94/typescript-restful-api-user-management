let inputElement = document.getElementById("input") as HTMLInputElement;

inputElement.value = "TypeScript is awesome!";
console.log(inputElement.value); // Output: TypeScript is awesome!
function identity<T>(value: T): T {
    return value;
}

let result = identity<string>("Hello, generics!");
console.log(result); // Output: Hello, generics!
