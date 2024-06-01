var cap = {
    firstName: 'Steve',
    lastName: 'Rogers',
    age:102,
    friends:['Vikrant Singh Bandral', 'Ashish', 'Arjun'],
    isAvenger: true,
    address: {
        state: 'Jammu and Kashmir',
        city: {
            name: 'Jammu',
            pincode: '180005'
        }
    }
}
console.log(cap.friends[1]) // "Ashish"
console.log(cap.address.city.name) // "Jammu"

cap.isAvenger = false // updating existing isAvenger property
console.log(cap) 
// adding new proprty movies from outside of object cap
cap.movies = ['age of ultron', 'civil war', 'first avenger']
console.log(cap) // this will add this new movies key with all the array values inside existing cap object

// delete property by using delete keyword
delete cap.age
console.log(cap) // this will delete the age property


