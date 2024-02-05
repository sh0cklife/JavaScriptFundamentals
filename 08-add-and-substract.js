function solve(a, b, c){
    'use strict';

    /* function sum(a, b){
        return a + b;
    } */
    const sum = (a, b) => a + b;
    const sub = (a, b) => a - b;

    const result = sub(sum(a, b), c)

    console.log(result);
}
solve(23, 6, 10);