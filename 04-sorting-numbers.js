function solve(input){
    'use strict';

    input.sort((a, b) => a - b);
    const result = [];
    while (input.length > 0){
        const firstElement = input.shift();
        const lastElement = input.pop();

        result.push(firstElement)
        if (lastElement){
            result.push(lastElement)
        }
    }

    return result;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));