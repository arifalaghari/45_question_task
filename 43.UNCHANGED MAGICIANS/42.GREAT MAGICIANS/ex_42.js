// Challenge Coding Qno:42
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
var magicians_names = ["Harry poter", "Arif", "Usman", "Ali"];
// Call make_great function to modify magicians names
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
