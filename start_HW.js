
// Завдання №1
let product_1_Price = 124.3;
let product_2_Price = 108.52;
let product_3_Price = 117.1;
let product_4_Price = 24.8;

let total = product_1_Price + product_2_Price + product_3_Price + product_4_Price;

console.log(total.toFixed(2));

// Завдання №2
let amount = parseFloat(prompt("Ціна товара"));
let discount = amount * 0.1;
let discountedPrice = amount - discount;

console.log(discountedPrice.toFixed(2));

// Завдання №3
let firstValue = parseFloat(prompt("Перше значення"));
let secondValue = parseFloat(prompt("Друге значення"));
let thirdValue = parseFloat(prompt("Третє значення"));
let fourthValue = parseFloat(prompt("Четверте значення"));

console.log("Перше значення", firstValue);
console.log("Друге значення", secondValue);
console.log("Третє значення", thirdValue);
console.log("Четверте значення", fourthValue);

let average = (firstValue + secondValue + thirdValue + fourthValue) / 4;
console.log("Среднее значение:", average.toFixed(2));
