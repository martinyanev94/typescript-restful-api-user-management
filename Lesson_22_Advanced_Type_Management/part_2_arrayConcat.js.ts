import { concatArrays } from 'lodash';

const stringArray1 = ['Hello', 'world'];
const stringArray2 = ['How', 'are', 'you?'];
const concatenated = concatArrays(stringArray1, stringArray2);

console.log(concatenated); // ["Hello", "world", "How", "are", "you?"]
