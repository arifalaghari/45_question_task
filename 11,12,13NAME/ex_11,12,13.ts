// Challenge Coding Qno:11
//array
//Defines as array of names
let friendNames: string[] = ["Kamran khan", "Bilal", "Kashif", "Arif Ali", "Abdul salam", "Nouman"];

// loop                     
// for each
// for loop
for (let i = 0; i < friendNames .length; i++) {
    console.log(friendNames[i]);
    
}

//for each 
friendNames.forEach(friend => {
console.log(friend);
});

//for of loop
for (let friName of friendNames) {
    console.log(friName);
}




// Challenge Coding Qno:12
for (let i = 0; i <friendNames.length; i++) {
    console.log(`hello, ${friendNames[i]}! how are you today?`);
}


//for each
friendNames.forEach(friend => {
    console.log(`Hi, ${friend}! how are you today?`);
    });


    //for of loop
    for (let friendName of friendNames) {
        console.log(`Dear, ${friendName}! how are you?`);
    }




 // Challenge Coding Qno:13
   let transportationMode: string[] = ["car", "motorcycle", "bicycle", "bus"];

    for (let i = 0; i < transportationMode.length; i++) {
        console.log(`I would to own a ${transportationMode[i]}`);
    }

transportationMode.forEach(mode => {
    console.log(`i would like to own ${mode}`);
        
    });
