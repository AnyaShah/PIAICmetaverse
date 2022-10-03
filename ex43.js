// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array to 
// show that you have one array of the original names and one array with the Great added to each 
// magician’s name.

let magicianName=["Harry","Jack","Peter"]

make_great=()=> magicianName.forEach(val => {
    console.log("the Great "+ val)
}) 

let show_magicians=make_great()
console.log(show_magicians)

show_magicians = () => magicianName
let arr=show_magicians()
console.log(arr)


