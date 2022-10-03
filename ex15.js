// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program 
//stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
// you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let guestList=["Samra","Sir Zia", "Miss Aisha"]
for(i=0; i<guestList.length; i++){
    let invite=guestList[i] 
    console.log(`Dear ${invite} \n I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday.
    I would eagerly await your presence at the celebration dinner. \n` )
  
} 


console.log(` \n ${guestList[2]} could'nt attend todays dinner \n \n`)
guestList.splice(2,1,"Miss Numrah")
for(i=0; i<3; i++){
    let invite=guestList[i] 
    console.log(`Dear ${invite} \n I cordially invite you to the dinner to be held at my residence from 7 pm onwards next Sunday.
     I would eagerly await your presence at the celebration dinner.` )

} 
