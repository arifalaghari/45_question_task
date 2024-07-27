// Challenge Coding Qno:33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${numbers}${suffix}`);  // Output :   1st
                                        // Output :   2nd
                                        // Output :   3rd
                                        // Output :   4th
                                        // Output :   5th
                                        // Output :   6th
                                        // Output :   7th
                                        // Output :   8th
                                        // Output :   9th
});
