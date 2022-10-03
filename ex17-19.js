// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.

let guestList=["Samra","Sir Zia", "Miss Aisha"]
let invitation= () =>{
for(i=0; i<guestList.length; i++){
    let invite=guestList[i] 
    console.log(`Dear ${invite} \n I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday.
    I would eagerly await your presence at the celebration dinner. \n` )
} 
}
invitation()
console.log(`\n \n ${guestList[2]} could'nt attend todays dinner.\n \n `)

guestList.splice(2,1,"Miss Numrah")

invitation()
console.log(`\n \n I have found a bigger table so i decided to invite more people on dinner. \n \n`)


guestList.unshift("Rubab")

guestList.splice(2,0,"Jazib")
guestList.push("Aniya")

invitation();

// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know you’re sorry 
//  you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log(`\n \n I have to invite only two people. \n \n`)



for(i=guestList.length; i>2; i--){
    console.log(`Dear ${guestList.pop()} \n I apploigize to announce that i can't invite you for Sunday's dinner.`)

}

invitation()
 
// ex19
//  print a message indicating the number of people you are inviting to dinner. 
console.log(`\n ${guestList.length} \n`)

// • Remove the last two names from your list, so you have an empty list. Print your list to make 
// sure you actually have an empty list at the end of your program.
guestList.length=0;
console.log(`\n Empty list ${guestList}`)

