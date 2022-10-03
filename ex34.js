// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the 
// name of the pizza. For each pizza you should have one line of output containing a simple 
// statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an 
// additional sentence, such as I really love pizza!

let Pizzas=["Fajita","BBQ","Arabian Ranch"]

Pizzas.forEach(names => {
    console.log(names)
    console.log(`I like ${names} pizza.`)
});

console.log(`The biggest love of my life is pizza. The crispy base, cheesy top, and spicy taste all that in a single dish, the hot pizza in hand, 
is the best feeling of the world.I also like stuffed crust pizza of 
different flavors like ${Pizzas} and arabic Kebab topped Ranch sauce truly made pizza more delicious. `)
console.log("I really love pizza!")