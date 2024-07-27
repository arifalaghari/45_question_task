// Challenge Coding Qno:32

let current_users: string[] = ["khalid", "admin", "awais", "zain", "junaid"];
let new_users: string[] = ["Imran", "Shahbaz", "Muhammad", "admin", "Farooq"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`{newUsers} will need to explain work of every newUser`);   // Output : admin will need to explain work of every newUser.
    } else {
        console.log(`{newUsers} is available.);    // Output :  Imran is available`)
                                                  // Output :  Shahbaz is available.
                                                  // Output :  Muhammad is available.
                                                  // Output :  Farooq is available.
    }
});
