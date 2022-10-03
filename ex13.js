// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about 
// these items, such as “I would like to own a Honda motorcycle.”

let favTranspotaion=["Car", "Aeroplane", "Electric Train"];
let statements=["I love","I want", "I like"]

   
for(i=0; i<3; i++){
    let s=statements[i]
    let t=favTranspotaion[i]
   console.log(`${s} ${t}`)
    
}

