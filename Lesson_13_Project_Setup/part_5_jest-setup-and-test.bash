npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
import { greet } from '../src/index';

test('greet function test', () => {
    expect(greet("TypeScript Enthusiast")).toBe("Hello, TypeScript Enthusiast!");
});
npx jest
