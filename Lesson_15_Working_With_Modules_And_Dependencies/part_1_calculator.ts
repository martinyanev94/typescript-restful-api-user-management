// app.ts
import { calculate, Operation } from './math';

const resultAdd = calculate(5, 3, 'add');
const resultSubtract = calculate(5, 3, 'subtract');

console.log(`Addition Result: ${resultAdd}`); // Outputs: Addition Result: 8
console.log(`Subtraction Result: ${resultSubtract}`); // Outputs: Subtraction Result: 2
