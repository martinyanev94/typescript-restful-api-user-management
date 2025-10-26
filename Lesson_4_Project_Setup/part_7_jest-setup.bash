npm install jest ts-jest @types/jest --save-dev
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
import { add } from './utils'; // Make sure to export add from utils.ts

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
"test": "jest"
npm run test
