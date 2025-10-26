// user.ts (CommonJS)
const users = ['Alice', 'Bob', 'Charlie'];

function listUsers() {
    console.log(users);
}

module.exports = { listUsers };
// app.ts (ES Module)
import { listUsers } from './user'; // This will throw an error
{
    "compilerOptions": {
        "module": "es6" // For ES Modules
    }
}
{
    "compilerOptions": {
        "module": "commonjs" // For CommonJS
    }
}
