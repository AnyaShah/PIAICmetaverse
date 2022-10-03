// Cars: Write a function that stores information about a car in a Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an 
//optional feature. Print the Object that’s returned to make sure all the information was stored correctly.



function Car(manufacturer, model,color, feature, keywords) {
    this.Manufacturer = manufacturer;
    this.Model = model;
    this.Color = color;
    this.Feature = feature;
    this.keywords= keywords;
  }
  const carDetails = new Car("Toyota", "Civics",  "blue", "Auto", ["hello", "world"]);
  console.log(carDetails)