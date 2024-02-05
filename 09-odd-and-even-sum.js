function solve(input){
    'use strict';

    let oddSum = 0;
    let evenSum = 0;

    while (input > 0){
        const currentDigit = input % 10
        if (currentDigit % 2 === 0){
            evenSum += currentDigit;
        }else {
            oddSum += currentDigit;
        }
        input = Math.floor(input / 10)
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435);