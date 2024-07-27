// Challenge Coding Qno:14
/* if you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
  that includes at least three people you,d like to invite to dinner. Then use your list to
  print a message to each person, inviting them to dinner.
  */


  const myFrinds: string [] = ["Ali", "Muhammad", "Arif", "Ayaz"];

  // 1st method with loop
//   for(let i = 0; i < myFrinds.length; i++){
//     console.log(`Mr. ${myFrinds[i]}! you are invited to my dinner on Monday`);
//   }
 
// 2nd method using map()

myFrinds.map((ib)=>{
    console.log(`Mr. ${ib}! you are invited to my dinner on Monday\n`);
})