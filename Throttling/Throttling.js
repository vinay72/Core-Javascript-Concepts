// Walmart ui interview question
// throttling - it is generally used for performance optimization or rate limiting the function calls and function execution
// throttling delays function calls for a certain period of time
// implement own throttling function and how we can throttle any method


const expensive = () => {
    console.log("Expensive");
}
window.addEventListener("resize", betterExpensive)
// 
// on each and every resize event, this method expensive will be called,
// when the window is resized, 100 and thousand times this method gets called, is this a good way, obviously not


const betterExpensive = throttle(expensive, limit);
// this function is throttled expensive function
// So we have to implement this throttle function on our own

// Our own implementation of throttle method
// throttle function has two arguments - 1. function here expensive function 2. limit - duration after which the function will be throttled
const throttle = (func, limit) => {
    let flag = true; // this is an instance of flag and this is what Closure is
    // we will only call the below fn, when the flag is true, i am just trying to restrict my func() call.
    return function(){
        let context = this
        args = arguments
        if(flag){
            // if our flag is true, then only make a functional call
            func.apply(context, args)
            flag = false // for ignoring the unnecassary key presses and events
            setTimeout(() => {
                flag = true 
            }, limit);
            // wait for limit to expire, start a timer, make the flag true once our limit has crossed
        }
        
    }
}