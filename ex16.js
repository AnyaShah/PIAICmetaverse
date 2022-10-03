// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.



let guestList=["Samra","Sir Zia", "Miss Aisha"]
let invitation= () =>{
for(i=0; i<guestList.length; i++){
    let invite=guestList[i] 
    console.log(`Dear ${invite} \n I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday.
    I would eagerly await your presence at the celebration dinner. \n` )
} 
}
invitation()
console.log(` \n ${guestList[2]} could'nt attend todays dinner \n \n`)


guestList.splice(2,1,"Miss Numrah")

invitation()
console.log(`\n I have found a bigger table so i decided to invite more people on dinner. \n`)


guestList.unshift("Rubab")

guestList.splice(2,0,"Jazib")
guestList.push("Aniya")

invitation();


