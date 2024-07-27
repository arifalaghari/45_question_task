// Challenge Coding Qno:37
function make_shirt1(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it")); // Output : Making a large t-shirt with the message "TypeScript" printed on it.
    // Output : Making a medium t-shirt with the message "Javascript" printed on it.
    // Output : Making a small t-shirt with the message "Python" printed on it. 
}
make_shirt1(); // Default large and message
make_shirt1("medium", "Javascript"); // Custom message, medium size
make_shirt1("small", "Python"); // Custom message, small size
