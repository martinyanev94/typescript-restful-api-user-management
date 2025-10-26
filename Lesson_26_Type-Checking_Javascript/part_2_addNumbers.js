// @ts-check

/**
 * @param {number} a - The first number to add
 * @param {number} b - The second number to add
 * @return {number} - The sum of a and b
 */
function addNumbers(a, b) {
    return a + b;
}

const sum = addNumbers(5, 10); // This will work
const wrongSum = addNumbers(5, "10"); // This will now show a type error
