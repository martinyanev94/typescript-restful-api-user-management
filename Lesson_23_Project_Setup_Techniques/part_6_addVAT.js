/**
 * @param {number} price
 * @param {number} vat
 * @returns {number}
 */
function addVAT(price, vat = 0.2) {
    return price * (1 + vat);
}
