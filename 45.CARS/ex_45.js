// Challenge Coding Qno:45
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    // options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("toyota", "Corolla", ["color", "silver"], ["year", 2024]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
