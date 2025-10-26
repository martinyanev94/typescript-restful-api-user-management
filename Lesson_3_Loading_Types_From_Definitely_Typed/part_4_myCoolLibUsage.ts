declare module 'my-cool-lib' {
    export function coolFunction(input: string): number;
}
import { coolFunction } from 'my-cool-lib';

const result: number = coolFunction('TypeScript rocks!');
