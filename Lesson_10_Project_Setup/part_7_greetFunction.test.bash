mkdir __tests__
import { greet } from '../src/index';

describe('greet function', () => {
    it('should return a greeting message', () => {
        expect(greet("TypeScript")).toBe("Hello, TypeScript!");
    });

    it('should throw an error if name is null', () => {
        expect(() => greet(null)).toThrow("Name cannot be null.");
    });
});
