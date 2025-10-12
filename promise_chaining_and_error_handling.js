const cart = ["shoe","pants", "kurta"]
// PROMISE CHAINING
createOrder(cart) 
    .then(function(orderId) {
        console.log(orderId)
        // proceedToPayment(orderId)
        return orderId
    })
    .catch(function (err){
        console.log(err.message); // we got printed cart is not valid
        // catch will handle any error in this promise chain
    }) // promise can be attached with failure callback as well
    .then(function(orderId) {
        return proceedToPayment(orderId) // return the promise itself
    }) // to catch the response we write another then we handle our response as paymentInfo inside that
    .then(function(paymentInfo){
        console.log(paymentInfo);
        
    })
    
// this createprder api has created a promise object and this promise object is attached with line no 3 object

// Producer
function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        //createOrder
        //validate cart
        //orderId
        if(!validateCart){
            const err = new Error("cart is not valid")
            reject(err)
        }
        // logic of createOrder is successfull
        const orderId = "123456"
        if(orderId) {
            setTimeout(function() {
                resolve(orderId) // i will resolve the promise after 5 seconds
            }, 5000)
            
        }
    })

    return pr
}

function proceedToPayment(orderId){
   
    return new Promise(function(resolve, reject) {
        resolve("Payment successful")
    })
}

function validateCart(cart) {
    return true 
    // return false // we woud get an error Cart is not valid. we will use catch
}

// now orderId will log after 5 seconds

// So this is how we create a whole promise