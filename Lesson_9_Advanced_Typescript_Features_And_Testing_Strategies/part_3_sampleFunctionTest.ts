export const sampleFunction = (num: number): number => {
    return num * 2;
};
import { sampleFunction } from '../src/sampleFunction';

describe('sampleFunction', () => {
    it('should return double the input number', () => {
        expect(sampleFunction(2)).toBe(4);
        expect(sampleFunction(-3)).toBe(-6);
        expect(sampleFunction(0)).toBe(0);
    });
});
