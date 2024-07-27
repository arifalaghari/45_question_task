// Challenge Coding Qno:30
var usernames = ["admin", "Arif Ali", "Shoukat Khan", "Abdul Salam", "Kamran Khan", "Farooq Ahmed"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello", username, "Dear admin, please tell me about requirements for admission in internship?"); //  Output : Dear admin, please tell me about requirements for admission in internship?
    }
    else {
        console.log("Hello", username, "nice to meet you."); // Output : Hello Arif Ali, nice to meet you
        // Output :     Hello Shoukat Khan, nice to meet you
        // Output :    Hello Abdul Salam, nice to meet you
        // Output : Hello Kamran Khan, nice to meet you
    }
});
