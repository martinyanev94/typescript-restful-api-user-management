interface User {
  name: string;
  age: number;
}

function displayUser(user: User): string {
  return `${user.name} is ${user.age} years old.`;
}

const user1: User = {
  name: "Alice",
  age: 28,
};

console.log(displayUser(user1));
const user1: User = {
  name: "Alice",
  age: "28", // This will cause an error
};
