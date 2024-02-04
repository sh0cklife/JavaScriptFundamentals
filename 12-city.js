function solve(cityObject) {
    for (let key in cityObject) {
        console.log(`${key} -> ${cityObject[key]}`);
    }
}
solve({    name: "Sofia",
area: 492,
population: 1238438,
country: "Bulgaria",
postCode: "1000"
});
