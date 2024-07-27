// Challenge Coding Qno:11
//array
//Defines as array of names
var friendNames = ["Kamran khan", "Bilal", "Kashif", "Arif Ali", "Abdul salam", "Nouman"];
// loop                     
// for each
// for loop
for (var i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}
//for each 
friendNames.forEach(function (friend) {
    console.log(friend);
});
//for of loop
for (var _i = 0, friendNames_1 = friendNames; _i < friendNames_1.length; _i++) {
    var friName = friendNames_1[_i];
    console.log(friName);
}
// Challenge Coding Qno:12
for (var i = 0; i < friendNames.length; i++) {
    console.log("hello, ".concat(friendNames[i], "! how are you today?"));
}
//for each
friendNames.forEach(function (friend) {
    console.log("Hi, ".concat(friend, "! how are you today?"));
});
//for of loop
for (var _a = 0, friendNames_2 = friendNames; _a < friendNames_2.length; _a++) {
    var friendName = friendNames_2[_a];
    console.log("Dear, ".concat(friendName, "! how are you?"));
}
// Challenge Coding Qno:13
var transportationMode = ["car", "motorcycle", "bicycle", "bus"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would to own a ".concat(transportationMode[i]));
}
transportationMode.forEach(function (mode) {
    console.log("i would like to own ".concat(mode));
});
