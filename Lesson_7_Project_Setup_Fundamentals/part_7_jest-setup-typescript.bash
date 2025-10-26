npm install --save-dev jest ts-jest @types/jest
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
mkdir tests
import { greet } from '../src/index';

test('greet returns a proper greeting', () => {
    expect(greet('John')).toBe('Hello, John! Welcome to the world of TypeScript!');
});
npx jest
