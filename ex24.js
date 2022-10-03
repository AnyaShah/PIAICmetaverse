// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False 
// result for each of the following:

// • Tests for equality and inequality with strings
console.log('civics' == 'civics')
console.log('civics' !== 'civics')

// • Tests using the lower case function
const car="Civics"
console.log(car.toLowerCase() == 'civics')
console.log(car.toLowerCase() !== 'civics')

// • Numerical tests involving equality and inequality, greater than and less than, 
//   greater than or equal to, and less than or equal to

console.log(5 == 5)
console.log(5 !== 5)

console.log(5 > 6)
console.log(5 >= 5)

console.log(5 < 6)
console.log(5 <= 6)

// • Tests using "and" and "or" operators
console.log(5 == 5 && 6 !== 6)
console.log(5 == 5 && 6 == 6)

console.log(5 == 5 || 6==6)
console.log(5 !== 5 || 6 !==6)


// • Test whether an item is in a array
const num  = [1,2,3]
console.log(num.includes(2)) 

// • Test whether an item is not in a array
console.log(num.includes(5))




