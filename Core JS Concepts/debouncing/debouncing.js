// debouncing in javascript
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