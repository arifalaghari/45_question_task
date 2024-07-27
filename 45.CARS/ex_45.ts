// Challenge Coding Qno:45

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    // options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("toyota", "Corolla", ["color", "silver"], ["year", 2024]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));