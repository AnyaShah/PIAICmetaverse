// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase 
//  the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicianName=["Harry","Jack","Peter"]

make_great=()=> magicianName.forEach(val => {
    console.log("the Great "+ val)
});
let show_magicians=make_great()
console.log(show_magicians)
