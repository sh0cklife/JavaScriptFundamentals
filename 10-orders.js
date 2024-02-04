function solve(product, qty){
    if (product === "coffee"){
        console.log((qty *1.5).toFixed(2));
    }
    if (product === "water"){
        console.log((qty *1.0).toFixed(2));
    }
    if (product === "coke"){
        console.log((qty *1.4).toFixed(2));
    }
    if (product === "snacks"){
        console.log((qty *2.0).toFixed(2));
    }
}
solve("water", 5);