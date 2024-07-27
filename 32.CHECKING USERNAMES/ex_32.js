// Challenge Coding Qno:32
var current_users = ["khalid", "admin", "awais", "zain", "junaid"];
var new_users = ["Imran", "Shahbaz", "Muhammad", "admin", "Farooq"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("{newUsers} will need to explain work of every newUser"); // Output : admin will need to explain work of every newUser.
    }
    else {
        console.log("{newUsers} is available.);    // Output :  Imran is available");
        // Output :  Shahbaz is available.
        // Output :  Muhammad is available.
        // Output :  Farooq is available.
    }
});
