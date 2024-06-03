// Walmart ui interview question
// throttling - it is generally used for performance optimization or rate limiting the function calls and function execution
// throttling delays function calls for a certain period of time
// implement own throttling function and how we can throttle any method
const expensive = () => {
    console.log("Expensive");
}
window.addEventListener("resize", betterExpensive)
// on every resize event, this method expensive will be called,
// when the window is resized, 100 and thousand times this method gets called, is this a good way, obviously not
const betterExpensive = throttle(expensive, limit);
// this function is throttled expensive function
// So we have to implement this throttle function on our own

// Our own implementation of throttle method
// throttle function has two arguments - 1. function 2. limit - duration after which the function will be throttled
const throttle = (func, limit) => {
    let flag = true;
    // we will only call the below fn, when the flag is true, i am just trying to restrict my func() call.
    return function(){
        func();
        setTimeout(() => {

        }, limit);
    }
}