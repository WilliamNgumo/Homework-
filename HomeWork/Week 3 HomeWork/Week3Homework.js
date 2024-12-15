// Create an array of pizzaToppings with at least four different toppings
let availableToppings = ["sausage", "pepperoni", "pineapple", "Onions"];


function formatToppings(toppingsArray) {
  let sortedToppings = "";
  let index = 0;

  for(let topping of toppingsArray) {
    if (index === toppingsArray.length - 1) {
      sortedToppings += "and " + topping;
    } else {
      sortedToppings += topping + ", ";
    }
    index++;
  }


  return sortedToppings;
}

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  let topping = formatToppings(availableToppings);
  let greet = `Welcome to our pizza house our toppings are ${topping}.`;
  console.log(greet);
}

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  let sortedToppings = formatToppings(toppings);
  let order = `one ${size} ${crust} pizza with ${sortedToppings} coming up`;
  console.log(order);
  let orderArray = [size, crust, toppings];
  return orderArray;
}

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(foodArray) {
  console.log("...Cooking Pizza...");
let pizza = {
  size: foodArray[0],
  crust: foodArray[1],
  toppings: foodArray[2]
};
return pizza;
}

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pObject) {
  let toppingsmessage = formatToppings(pObject.toppings);
  let ordermessage = `Order up Heres your pizza ${pObject.size} ${pObject.crust} with ${toppingsmessage}! Enjoy!`;
  console.log(ordermessage);
};

greetCustomer();

let orderArray = getPizzaOrder(
  "sausage", "pepperoni", "pineapple", "Onions"
);
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input

let pizzaObject = preparePizza(orderArray);
servePizza(pizzaObject);

