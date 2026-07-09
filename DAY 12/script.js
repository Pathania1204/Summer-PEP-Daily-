// Debouncing: A function that waits for the user to stop triggering some event for a specific
// amount of time before it executes.
// Common usus of debouncing techniques
// Search Suggestions, API calls, Form Validation, Saving Drafts, Window Resize events

function debounce(callback, delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId) // Cancels the last timeOut
        timerId = setTimeout(() => {
            callback(...args);
        }, delay * 1000);
    }
}
const search = (query) => {
    console.log(`Searching for ${query}`);
}
const searchUsingDebounce = debounce(search, 2);
searchUsingDebounce("He");
searchUsingDebounce("Hello");
searchUsingDebounce("Hello");
searchUsingDebounce("Hello World");

// Throttling: It is a techniques that runs at functions at most one every
// specified interval, no matter how many times the event fires.
/*
    lastTime = 0;
    currentTime = 123;
    123-0 < 1 -> false
    lastTime = currentTime = 123
    Print "Say My name"

    lastTime = 123;
    currentTime = 123.5
    123.5 - 123 < 1 -> true -> return

    lastTime = 123;
    current = 125
    125-123 < 1 -> false
    lastTime = currentTime = 125
    print "Say my Name"

*/

// const throttle = (callback, interval) => { // HOF
//     let lastTime = 0;
//     return function(...args){
//         const currentTime = Date.now();
//         if (currentTime - lastTime < interval) {
//             return;
//         }
//         lastTime = currentTime;
//         return callback(...args);
//     }
// }

// function sendComment(comment){ // Callback
//     console.log(`Comment: ${comment}`);
// }

// const sendUsingThrottle = throttle(sendComment, 1);

// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");
// sendUsingThrottle("Say My Name");


// Currying
// Currying is a technique where a function takes multiple arguments and tramsforms them into a sequence of functions, each taking one argument.

// traditional way
// function add(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// currying way
// function add(num1){
//     return function(num2){
//         return function(num3){
//             return num1 + num2 + num3;
//         }
//     }
// }
// console.log(add(2)(3)(4));

/* Why use currying
    Reuse function with some arguments already
    create specialized functions
    improve code readibility in some cases
    Compose function more easily
*/

// function greet(greeting, uname) {
//     return `${greeting} ${uname}`;
// }

// function greet(greeting){
//     return function(uname){
//         return `${greeting} ${uname}`;
//     }
// }

// const greet1 = greet("Hello");
// console.log(greet1("John"));
// console.log(greet1("Kane"));
// const greet2 = greet("Evening");
// console.log(greet2("Master Bruce"));

// HomeWork: Proxy and Reflect Objects