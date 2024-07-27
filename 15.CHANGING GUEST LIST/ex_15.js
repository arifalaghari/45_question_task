// Challenge Coding Qno:15
/*
you just heard that one of your guestcan,t make the dinner, so you need to send out a new set of
invitations. you,ll have to program think of someone else to invite.
start with your program from Exercise 14. Add a print statment at the end of your program
stating the name of the guest who can,t make it.
Modify your list, replacing the name of the guest who can,t make it with the name of the
new person you are inviting.
print a second set of invitation message, one for each person who is still
in your list.
*/
var myFriends = ["Ali", "Arif", "Ayaz", "Kamran"];
console.log(" due to some personal reasons Mr. ".concat(myFriends[1], " will not come on my dinner"));
myFriends[1] = "Bilal";
console.log("New list of my friends who are comming to my dinner\n");
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myFriends[i]));
}
