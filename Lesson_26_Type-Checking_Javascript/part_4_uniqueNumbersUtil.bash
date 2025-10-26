npm install --save-dev @types/lodash
// @ts-check
import _ from 'lodash';

/**
 * @param {Array<number>} numbers - An array of numbers
 * @return {Array<number>} - An array of unique numbers
 */
function getUniqueNumbers(numbers) {
    return _.uniq(numbers);
}

const nums = [1, 2, 2, 3, 3, 4];
const uniqueNums = getUniqueNumbers(nums); // Works like a charm!
console.log(uniqueNums); // Outputs: [1, 2, 3, 4]
