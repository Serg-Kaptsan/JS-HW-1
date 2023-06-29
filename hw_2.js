
//Завдання №1:

let login = prompt ("Введіть логін");
let parole = prompt ("Введіть свій пароль");

if (login == "admin" & parole == 12345){
    alert ("Вітаємо в системі");
}
else{
    alert ("Пароль або логін не вірні");
}




//Завдання №2:

let userAge = prompt ("Введіть свій вік");
let isAdult = (userAge > 18) ? true : false;

console.log(isAdult);




//Завдання №3:

let dataDay = prompt("Введіть день тижня");
switch (dataDay) {
    case "Вівторок" :
    case "вівторок" :
    case "Четвер" :
    case "четвер" :
        console.log (`Сьогодні ${dataDay} у вас урок о 19:00`);
        alert(`Сьогодні ${dataDay} у вас урок о 19:00`);
        break;

    case "Понеділок":
    case "понеділок":
    case "Середа":
    case "середа":
    case "П'ятниця":
    case "п'ятниця":
        console.log (`Сьогодні ${dataDay} у вас занять немає`);
        alert(`Сьогодні ${dataDay} у вас занять немає`);
        break;

    case "Субота":
    case "субота":
    case "Неділя":
    case "неділя":    
        console.log(`Вітаємо! Сьогодня вихідний`);
        alert(`Вітаємо! Сьогодня вихідний`);
        break;
       
    default:
        console.log(`Скорестайтеся, будь ласка, українською мовою`);
        alert(`Скорестайтеся, будь ласка, українською мовою`);
}

