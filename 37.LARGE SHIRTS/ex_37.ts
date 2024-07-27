// Challenge Coding Qno:37

function make_shirt1(size: string = "large", message: string = "TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);   // Output : Making a large t-shirt with the message "TypeScript" printed on it.
                                                                                           // Output : Making a medium t-shirt with the message "Javascript" printed on it.
                                                                                           // Output : Making a small t-shirt with the message "Python" printed on it. 
}

make_shirt1(); // Default large and message
make_shirt1("medium" , "Javascript"); // Custom message, medium size
make_shirt1("small", "Python"); // Custom message, small size
