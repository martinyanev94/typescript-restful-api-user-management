// @ts-check

/**
 * @typedef {Object} User
 * @property {string} name - The name of the user
 * @property {number} age - The age of the user
 */

function greetUser(user) {
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

const user1 = { name: "Alice", age: 30 };
greetUser(user1);

const user2 = { name: "Bob", age: "not a number" }; // This will produce a type error
greetUser(user2);
