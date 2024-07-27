// Challenge Coding Qno:42
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
);

}

function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`)

}

// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
 let magicians_names = ["Harry poter", "Arif", "Usman", "Ali"]

 // Call make_great function to modify magicians names
 let great_magicians = make_great(magicians_names)

 console.log(great_magicians);
 