npm install -D @types/lodash
import _ from "lodash";

const flattened = _.flattenDeep([1, [2, [3, [4]], 5]]);
console.log(flattened); // Outputs: [1, 2, 3, 4, 5]
