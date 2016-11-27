/**
 * Check a given input is representation of a positive integer.
 */
exports.isPositiveIntegerString = function(input) {
    return (typeof input === 'string' && (/^[0-9]+$/).test(input));
};