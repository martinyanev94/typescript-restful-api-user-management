class Person {
    constructor(public name: string) {}
}

let person = new Person("Alice");
console.log(person instanceof Person); // Output: true
console.log([] instanceof Array); // Output: true
console.log({} instanceof Object); // Output: true
interface User {
    id: number;
    name: string;
}

let user: User = {
    id: 1,
    name: "John Doe"
};

console.log(user.id); // Output: 1
