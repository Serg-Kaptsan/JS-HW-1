// - Створіть клас Сar, який має такі значення (рік випуску, модель, назву, кількість покупок), розмістіть 5 створених об’єктів в масив машин.

class Car {
    constructor(year, model, name, buying){
        this.year = year;
        this.model = model;
        this.name = name;
        this.buy = buying;
   }
}
const cars = [
    new Car(2020, 'BMW', 'X5', 10),
    new Car(2019, 'Audi', 'A4', 13),
    new Car(2022, 'Tesla', 'Model 3', 5),
    new Car(2018, 'Honda', 'Civic', 18),
    new Car(2021, 'Toyota', 'Camry', 12)
];


// За допомогою деструктуризації переберіть масив, в який виведіть в консоль інфо про модель і кількість покупок.

const [year, model, name, buy] = cars;
cars.forEach(({ model, buy }) => {
  console.log(`Кількість продаж моделі ${model} склала ${buy} одиниць`);
});

// - Створіть html з такими елементами і виберіть їх селекторами
window.onload = function() {
    let autoplay = document.querySelector('[autoplay]');
    let elements = document.querySelectorAll('div, p');
    let listItems = document.querySelectorAll('ul.nav > li');
    let listItem = document.querySelectorAll('li:nth-child(2)');
}


// - Створити html документ, в якому є теги header, footer, nav вибрати їх селектором, розмістити в масив, а далі за допомогою forEach змінити їх innerHtml значення ( тут є 2 вирішення по виборці елементів).

window.onload = function() {
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let nav = document.querySelector('nav');

let tegs = [header, footer, nav];
tegs.forEach(item => {item.innerHTML = `To unfold!`});

// Друге вирішення по виборці елементів:
// [header, footer, nav].forEach(item => {item.innerHTML = `To unfold!`});

};

// ) Створити функцію, яка при виклику повертає інформацію, скільки днів в цьому місяці а також в наступному ( В цьому місяці 30 днів в наступному 31 ). Задача на роботу з Date.

function daysInMonthes() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
  
    const daysInCurrent = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();
  
    const nextMonth = (currentMonth + 1) % 12;
    const daysInNext = new Date(currentDate.getFullYear(), nextMonth + 1, 0).getDate();
  
    return `В цьому місяці ${daysInCurrent} днів, в наступному ${daysInNext}.`;
  }
  
  const info = daysInMonthes();
  console.log(info); 





