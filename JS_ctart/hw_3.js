
// - Створити пустий масив і заповнити його всіма парними значеннями від 0 до 20;

let Array = [];

for (let i = 2; i <= 20; i += 2) {
    Array.push(i);
}

console.log(Array);

// - Створіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі значення "Remove" з масиву - ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] в результаті повинен бути ось такий новий масив ["Keep", "Keep", "Keep", ...];

let secondArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];

let newArray = [];
for (let i = 0; i < secondArray.length; i++) {
    if(secondArray[i] !== 'Remove'){
        newArray.push(secondArray[i]);
    }
}
// let newArray = secondArray.filter(item => item !== "Remove");

console.log(newArray);

// - Написати цикл який замінює від’ємне значення в масиві на 0

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];
for (let i = 0; i < checkArr.length; i++) {
    if(checkArr[i] < 0) {
        checkArr[i] = 0;
    }
}

console.log(checkArr);

// - Створити цикл який виводить значення в консоль в такому форматі "Сьогодні .... у вас такі плани: .." для даних використовує два масиви:

let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідні"];

for (let i = 0; i < days.length; i++) {
    console.log (`Cьогодні ${days[i]}, у вас ${plans[i]}`);
}


// Отримати 3 значення ( значення операція значення2 ) і використовуючи switch та if написати калькулятор

let input = prompt("Введіть математичний вираз, використовуючи пробіли між значеннями");

let expression = input.split(' ');
let value1 = parseFloat(expression[0]);
let operator = expression[1];
let value2 = parseFloat(expression[2]);

let result;

switch (operator) {
  case '+':
    result = value1 + value2;
    break;
  case '-':
    result = value1 - value2;
    break;
  case '*':
    result = value1 * value2;
    break;
  case '/':
    if (value2 !== 0) {
      result = value1 / value2;
    } else {
      result = "Помилка ділення на нуль";
    }
    break;
  default:
    result = "Введіть математичний вираз, або перевірте наявність пробілів";
    break;
}

console.log(`Результат: ${result}`);