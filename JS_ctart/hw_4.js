// Cтворити функцію, яка отримує аргумент і масив, якщо його значення 'last' то функція повертає останній елемент, якщо — 'first',  то повертає перший елемент масиву.

let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

function GetElement(type, element) {
    if (type === "first") {
        return element[0];}
    else if (type === "last") {
        return element[element.length - 1];}
    else {
        return null;
    }
}

    let ElementFirst = GetElement("first", animals);
    let ElementLast = GetElement("last", animals);

    console.log (ElementFirst);
    console.log (ElementLast);

    
// Створити функцію, яка отримує аргументом новий самйл і змінює в масиві ':)' на новий смайл.


function ChangeSmile(newSmile, array) {
    for (let i = 0; i < array.length; i++) {
        if (array [i] === ':)') {
            array [i] = newSmile;
        }
    }
}

let smile = [ ':)' , '=)' , ':)' ,  '=)' , ':)' , '=)' ];
let newSmile = ':(';

ChangeSmile(newSmile, smile);
console.log(smile);