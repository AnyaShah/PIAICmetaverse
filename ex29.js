// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits=["Mango","Strawberry","Grapes"]
let [f1,f2,f3,f4,f5]=favorite_fruits
if(favorite_fruits.includes(f1) ){
    console.log(`you are really like ${f1} !`)
}
if(favorite_fruits.includes(f2) ){
    console.log(`you are really like ${f2} !`)
}
if(favorite_fruits.includes(f3) ){
    console.log(`you are really like ${f3} !`)
}
if(favorite_fruits.includes(f4) ){
    console.log(`you are really like !`)
}
if(favorite_fruits.includes(f5) ){
    console.log(`you are really like ${f5} !`)
}
