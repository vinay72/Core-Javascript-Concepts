//using await with async 

// async and awit function is used to handle promises  

const pr = new Promise((resolve , reject) => {

    setTimeout(() => {
        resolve("Promise Resolved Value 2 !!");
    },5000);
    
});

const pr1 = new Promise((resolve , reject) => {

    setTimeout(() => {
        resolve("Promise Resolved Value 2 !!");
    },10000);
    
});




//await can only be used inside an async function
async function handlePromise(){

    //It will be print first
    console.log("Written Before Promise Resolve");

    //Here JS Engine will wait to resolve the promise 
    const val = await pr;  
    //await is used before the promise that has to be resolved

    console.log("Namste Javascript");
    //after resolving promise then print this

    console.log(val);  //gives the resolved value


    const val1 = await pr1;  
    console.log("Namste Javascript 1");
    console.log(val1);
    //these lines have to wait for 10 seconds to resolve 
    //if pr has 10 seconds to wait , if pr has 5 sec and
    //pr1 has 10 second then pr will resolved at 5 second 
    //and then pr1 will resolved after 10 second

    //if two promises are there mainly depending on first 
    //promise 

}
handlePromise();

const API_URL = "https://api.github.com/users/unstoppableayush";

async function handlePromise1(){

    //Now Error Handling
    try{
        const data =await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
        
    }
    catch(err){
        console.log(err);
    }

    //fetch () is promise when it get resolve then => gives Respose object
    //Respose object has a body which is readable stream
    //convert readable stream we use .json() ,json() is again promise
    //if json() is resolve then we get jsonValue

    //fetch() => Response.json() => jsonValue



}
handlePromise1();