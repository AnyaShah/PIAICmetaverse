// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.



let usernames=["admin","aniya","nimra","umaima","rubab"]

for(i=0; i<5; i++){
    if(usernames[i]=="admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`)
    }


}
usernames=""
if (!usernames.length) {
    console.log(`We need to find some users!`)
}