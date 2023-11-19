let pizzaPlace = "Adaeze's Pizza";

let numberOfToppings = 6;

console.log(pizzaPlace);

console.log(numberOfToppings);

console.log(typeof numberOfToppings);

console.log(typeof pizzaPlace);

console.log(
  `At ${pizzaPlace} you can expect to get the best veggie pizza you can ever think of! We have ${numberOfToppings} toppings to create the combination veggie pizza of your dreams!`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
