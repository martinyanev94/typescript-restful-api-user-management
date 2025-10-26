// math.ts
export type Operation = 'add' | 'subtract';

export function calculate(a: number, b: number, operation: Operation): number {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        default:
            throw new Error('Invalid operation');
    }
}
