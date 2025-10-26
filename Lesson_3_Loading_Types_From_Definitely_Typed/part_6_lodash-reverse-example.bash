npm install lodash
npm install --save-dev @types/lodash
import _ from 'lodash';

const numbers: number[] = [1, 2, 3, 4, 5];
const reversed: number[] = _.reverse(numbers);

console.log(reversed); // Output: [5, 4, 3, 2, 1]
