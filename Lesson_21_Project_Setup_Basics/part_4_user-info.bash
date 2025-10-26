node src/app.js
// src/user.ts
export class User {
  constructor(public name: string, public age: number) {}

  getInfo(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}
// src/main.ts
import { User } from './user';

const user1 = new User("Alice", 30);
console.log(user1.getInfo());
