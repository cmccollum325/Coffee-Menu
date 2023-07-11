const coffeeMenu = require('./coffee_data.js')




const coffeeName = (coffeeMenu) => { //setting the object into an array
  return coffeeMenu.name; //returning the particular properties needed
}
console.log(coffeeMenu.map(coffeeName)); //logging the perspective data.
console.log ('-------------------- Number3----------------------');
//number 3

const coffeeUnder5 = coffeeMenu => { //setting object to array
  return coffeeMenu.price <= 5; // returning property
}
const priceUnder5 = coffeeMenu.filter(coffeeUnder5); //filtering by price set on return
var pricedLow = priceUnder5 => { //to 'filter' for just the names of the drinks
  return priceUnder5.name;
}
console.log (priceUnder5.map(pricedLow)) //Logging data
console.log ('--------------------Number 4----------------------');

//number 4

const evensAre = coffeeMenu => {
  return coffeeMenu.price % 2 == 0;
}
const theEvens = coffeeMenu.filter(evensAre);
const evenCoffee = theEvens => {
  return theEvens.name;
}
console.log (theEvens.map(evenCoffee));
console.log ('-------------------- Number 5----------------------');


//number 5
// Before reducing I used the code below similarly to the code above to create a new array for simplicity before moving into the reduce
const pricing = coffeeMenu => {
  return coffeeMenu.price;
}
const priceArray = coffeeMenu.map(pricing);

const priceTotal = (accumulator, currentValue) => {
  return accumulator + currentValue
}
const totalPricing = priceArray.reduce(priceTotal);
console.log(totalPricing);

console.log ('-------------------- Number 6----------------------');


//number 6

const isSeasonal = coffeeMenu => {
  return coffeeMenu.seasonal == true
}
const seasonalDrinks = coffeeMenu.filter(isSeasonal);
var seasonalName = seasonalDrinks => {
  return seasonalDrinks.name;
}
console.log (seasonalDrinks.map(seasonalName));

console.log ('-------------------- Number 7----------------------');

//number 7
const isSeasonal1 = coffeeMenu => {
  return coffeeMenu.seasonal == true
}
const seasonalDrinks1 = coffeeMenu.filter(isSeasonal1);
var seasonalName1 = seasonalDrinks1 => {
  return seasonalDrinks1.name;
}
console.log (`${seasonalDrinks1.map(seasonalName1)[0]} with imported beans.`);
console.log (`${seasonalDrinks1.map(seasonalName1)[1]} with imported beans.`);




