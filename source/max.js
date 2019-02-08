'use strict';

const max = numbers => Math.max(...numbers);

/**
 * Calculates the gcd of two numbers
 *
 * @param {number} first - The first number
 * @param {number} second - The second number
 * @returns {number}
 */
let gcd = (first, second) => {
    while (first !== 0 && second !== 0) {
        (first > second) ? first %= second : second %= first;
    }
    return first + second;
};

const euclid = (...args) => {
    if (typeof args[0] === "undefined") {
        return null;
    }

    if (typeof args[1] === "undefined") {
        return args[0];
    }

    let result = gcd(args[0], args[1]);

    [...args].splice(1, 2);
    [...args].forEach(element => {
        result = gcd(result, element);
    });

    return result;
};
