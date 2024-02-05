function solve(inputArray, step) {
    'use strict';

    const result = [];

    for (let i = 0; i < inputArray.length; i += step) {
        result.push(inputArray[i]);
    }

    return result;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log();