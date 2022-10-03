// Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
// are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, 
// print a message that the person will need to enter a new username. If a username has not been used, 
// print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users=["admin","aniya","nimra","umaima","rubab"];

let new_users=["jazib","aniya","NIMRA","manahil","Aroosha"];

new_users.forEach(val => {
    // new_users[val]
    // console.log(val)
    if(current_users.includes(val.toLowerCase())){
        console.log("You will need to enter a new username.")
    }
    else{
        console.log("the username is available.")
    }
});


