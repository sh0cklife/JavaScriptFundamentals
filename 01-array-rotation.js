function solve(inputArr, nRotations){
    'use strict';

    for(let index = 0; index < nRotations; index++){
        const firstElement = inputArr.shift()
        inputArr.push(firstElement);
    }
    console.log(inputArr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);