function solve(listofNames){
    'use strict';

    listofNames.sort((a, b) => a.localeCompare(b));
    
    for (let i = 1; i <= listofNames.length; i++){
        console.log(`${i}.${listofNames[i - 1]}`);
    }

}

solve(["John", "Bob", "Christina", "Ema"]);