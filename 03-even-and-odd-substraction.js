function sum(input){
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < input.length; i++){
        let currentNumber = Number(input[i]);

        if (currentNumber % 2 == 0){
            evenSum += currentNumber;
        }
        else if (currentNumber % 2 != 0){
            oddSum += currentNumber;
        }
    }
    console.log(evenSum - oddSum);
}
sum([1, 2, 3, 4, 5, 6])
sum([3, 5, 7, 9])
sum([2, 4, 6, 8, 10])