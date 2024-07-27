// Challenge Coding Qno:24
//• Tests for equality and inequality with strings

console.log("Enquality test:", ("Arifa ali" as string) === "Arifa ali");

console.log("Inquality test:", ("Arifa ali" as string) !== "Imran khan");

//• Tests using the lower case function

console.log("LowerCase test:" ,"ARIFA ALI".toLowerCase() ==="arifa ali");

//• Numerical tests involving equality and inequality, greater than and less
//than, greater than or equal to, and less than or equal to

console.log("Equality test:", 1000 === 1000) //Equality
console.log("Inequality test", (10 as number) !== 9); //Inquality
console.log("greater than test", 10000 > 100), //Greater than
console.log("less than test", 10 < 100); //Less than
console.log("greater than and equals to test", 10 >= 10);
console.log("less than and equals to test", 5 <= 10 );


//• Tests using "and" and "or" operators

console.log("And operator test", true && true);
console.log("Or operator test", true || false);



//• Test whether an item is in a array

const car = [1 ,2 , 3];

console.log("test number", car.includes(1));

//• Test whether an item is not in a array

const car1 = [1 ,2 , 3];

console.log("test number", !car.includes(6));











