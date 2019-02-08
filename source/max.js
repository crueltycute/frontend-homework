'use strict';

const max = numbers => Math.max(...numbers);

function gcd(a, b) {
    while (a != 0 && b != 0) {
        (a > b) ? a %= b : b %= a;
    }
    return a + b;
}

const euclid = function(...args) {
    if (typeof(args[0]) == "undefined") {
        return null;
    }

    if (typeof(args[1]) == "undefined") {
        return args[0];
    }

    let result = gcd(args[0], args[1]);
    for (let i = 2; i < args.length; ++i) {
        result = gcd(result, args[i]);
    }

    return result;
}
