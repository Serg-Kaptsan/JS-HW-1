// - Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість CountLowrercase("abc"); ===> 0 CountLowrercase("abcABC123"); ===> 3

window.onload = function() {

    function countUppercase (str) {
        let pattern = /[A-Z]/g;
        let matches = str.match(pattern);
        if (!matches) {
        return 0;
        }
        return matches.length;
    }
    let inputStr = prompt ("Введіть значення:");
    let result = countUppercase(inputStr);


// - Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його clearString("hell5o wor6ld") ======> 56

    function clearString (inputStr) {
        let numMatch = inputStr.match(/\d/g || []);
        return numMatch ? numMatch.join('') : '';
    }
        let numMatch = clearString(inputStr);

    // let numMatch = (inputStr.match(/\d/g) || []).join('');
  
    console.log (`Кількість букв у верхньому регістрі: ${result}, ${numMatch ? 'числові значення: ' + numMatch : 'числових значень не знайдено'}`);


    // - Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, довжина імя повина бути від 4 до 10 символів.

    function validate (userName) {
        return (/^[a-zA-Z0-9_-]{4,10}$/).test(userName);
    }

    let userName = prompt("Введіть ім'я:");
    let validateUsername = validate (userName);
    
    // let validateUsername = (/^[a-zA-Z0-9_-]{4,10}$/).test(userName);

    console.log(validateUsername);

}