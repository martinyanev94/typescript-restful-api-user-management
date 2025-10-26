import _ from 'lodash';

const mixedArray = [1, 2, 3, 'four'];
const reversed = _.reverse(mixedArray); // TypeScript warns about incorrect types!

// This could lead to unexpected behavior at runtime
console.log(reversed); // You won't know 'four' is thrown in!
