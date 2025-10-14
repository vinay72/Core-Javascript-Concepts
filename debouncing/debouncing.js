// debouncing in javascript

// Debouncing is a technique used to control how many times we allow a function to be executed over time.
// When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.
// You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. 
// Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

// FLIPKART UI AND Vrize first round frontend developer interview question
let counter = 0

const getData = () => {
    // calls an API and gets the data
    console.log("Fetching Data..", counter++);
    
}
// what we want to achieve is when we pause then only event should trigger or api 
// call would be made

// debounce function
const debounce = function(fn,delay){
    let timer;
    // fn is getData in this case, debounce function will not let this getData function to make unnecessary network calls.
    // delay is time between two keystroke press events
    return function() {
        let context = this;
         args = arguments;
         clearTimeout(timer);
// this timer has setTimeout which when expires this delay of 300 milliseconds will call this getData method but if keystroke happens between this time, we need to clear this timer         
        timer = setTimeout(() => {
            getData.apply(context, arguments)
        }, delay)
        // if again a keystroke happens while pausing, then we should stop calling this method
    }
}

const betterFunction = debounce(getData, 300)
// if the time difference between two key presses is greater than 300 milliseconds then only call getData method,
// then only fetch the results from the api
// this should only call when user paused typing , not again and again

// the purpose is to reduce the no of network calls made and by using debounce function we can reduce the no on keypress events and we can optimize the performance of our web page.
