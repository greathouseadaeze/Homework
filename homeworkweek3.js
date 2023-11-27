// function greetCustomer(somePizzaToppings) {
//   console.log(`Welcome to our pizza restaurant. Here are our toppings: `);
//   for (let i = 0; i < somePizzaToppings.length; i++) {
//     console.log(somePizzaToppings[i] + ",");
//   }
// }

// greetCustomer(pizzaToppings);

// function getPizzaOrder(size, crust, ...desiredToppings) {
//   console.log(`One ${size} ${crust} pizza with ${desiredToppings} coming up!`);
//   let orderDetails = [];
//   orderDetails.push(size, crust, ...desiredToppings);
//   return orderDetails;
// }

// getPizzaOrder("extra large", "thick crust", "tomato", "onion", "cheese");

// // function preparePizza2(arrItems) {
// //   console.log(`Cooking pizza`);
// //   let newPizzaObj = {};
// //   newPizzaObj.size = arrItems[0];
// //   arrItems[1] = newPizzaObj.crust;
// //   // newPizzaObj.toppings = arrItems.slice(2);
// //   console.log(newPizzaObj);
// // }

// // preparePizza2(getPizzaOrder);

// // getPizzaOrder("extra large", "thick crust", "tomato", "onion", "cheese");

// // function preparePizza(orderDetails) {
// //   console.log(`...Cooking pizza!...`);
// //   let pizzaObj = {};
// //   for (let i = 0; i < orderDetails.length; i++) {
// //     pizzaObj.size = orderDetails[0];
// //     pizzaObj.crust = orderDetails[1];
// //     pizzaObj.toppings = orderDetails[3];
// //   }
// //   return console.log(pizzaObj);
// // }

// function preparePizza(getPizzaOrder) {
//   console.log(`...Cooking pizza!...`);
//   let pizzaObj = {};
//   let arrStuff = getPizzaOrder;
//   for (let i = 0; i < arrStuff.length; i++) {
//     // pizzaObj.size = arrStuff[0];
//     // pizzaObj.crust = arrStuff[1];
//     // pizzaObj.toppings = arrStuff.slice(2);
//   }
//   pizzaObj.size = arrStuff[0];
//   pizzaObj.crust = arrStuff[1];
//   // pizzaObj.toppings = arrStuff.slice(2);
//   return console.log(pizzaObj);
// }

// preparePizza(getPizzaOrder);
// preparePizza(
//   getPizzaOrder("extra large", "thick crust", "tomato", "onion", "cheese")
// );

// function servePizza(pizzaObj) {
//   console.log(
//     `Pizza Is Ready! Here's your ${pizzaObj.size} ${pizzaObj.crust} pizza with ${pizzaObj.toppings}. Enjoy!`
//   );
//   return console.log(pizzaObj);
// }

// function servePizza(preparePizza) {
//   let pizzaObj = preparePizza;
//   console.log(
//     `Pizza Is Ready! Here's your ${pizzaObj.size} ${pizzaObj.crust} pizza with ${pizzaObj.toppings}. Enjoy!`
//   );
//   return console.log(pizzaObj);
// }

// function servePizza(pizzaObj) {
//   let myPizzaObj = preparePizza();
//   console.log(myPizzaObj);
//   // console.log(`Order up! Heres your ${completePizza[0]} pizza`);
// }

// servePizza(preparePizza);

let pizzaToppings = ["tomatoes", "onion", "cheese", "black olives"];

function greetCustomer(somePizzaToppings) {
  console.log(`Welcome to our pizza restaurant. Here are our toppings: `);
  for (let i = 0; i < somePizzaToppings.length; i++) {
    console.log(somePizzaToppings[i] + ",");
  }
}

greetCustomer(pizzaToppings);

function getPizzaOrder(size, crust, ...desiredToppings) {
  console.log(`One ${size} ${crust} pizza with ${desiredToppings} coming up!`);
  let orderDetails = [];
  orderDetails.push(size, crust, ...desiredToppings);
  return orderDetails;
}

let needArr = getPizzaOrder(
  "extra large",
  "thick crust",
  "tomato",
  "onion",
  "cheese"
);

function preparePizza(arrItems) {
  console.log(`...Cooking pizza. `);
  arrItems = needArr;
  let pizzaObj = {};
  pizzaObj.size = arrItems[0];
  pizzaObj.crust = arrItems[1];
  pizzaObj.toppings = arrItems.slice(2);
  // console.log(pizzaObj);
  return pizzaObj;
}

let pizzaObj1 = preparePizza(getPizzaOrder);

function servePizza(pizzaObj) {
  pizzaObj = pizzaObj1;
  console.log(
    `Order up! Here is your ${pizzaObj.size} ${pizzaObj.crust} pizza with ${pizzaObj.toppings}. Enjoy!`
  );
  return pizzaObj;
}

servePizza(preparePizza);
