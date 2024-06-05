// debouncing in javascript

// Debouncing is a technique used to control how many times we allow a function to be executed over time.
// When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.
// You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. 
// Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

// FLIPKART UI INTERVIEW QUESTION
let counter = 0
const getData = () => {
    // calls an api and gets data
    console.log("Fetching data...", counter++)
}

const doSomeMagic = (fn, d) => {
    // function and delay as two arguments
    // d is delay between two keypress events
    let timer; // initialised timer
    return function () {

        let context = this;
        args = arguments;
        // these are required to keep a check that the environment of the lexical scope
        // where this function is running is correct and getData would be called with the same arguments if it had.
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments)
        }, d)
    }
}

const betterfunction = doSomeMagic(getData, 300)