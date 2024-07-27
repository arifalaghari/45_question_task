// Challenge Coding Qno:3
// lower case
var PersonName = "Arifa";
console.log("lowercase:", PersonName.toLowerCase());
// upper case
console.log("uppercase:", PersonName.toLocaleUpperCase());
// Title case
console.log("titlecase:", PersonName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
