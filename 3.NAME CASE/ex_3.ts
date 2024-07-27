// Challenge Coding Qno:3
// lower case
let PersonName: string ="Arifa"
console.log("lowercase:", PersonName.toLowerCase());

// upper case
console.log("uppercase:", PersonName.toLocaleUpperCase());

// Title case
console.log("titlecase:", PersonName.replace(/\bw/g,c => c.toUpperCase()));