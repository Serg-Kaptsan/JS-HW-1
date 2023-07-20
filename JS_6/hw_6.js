
// - Pеалізуйте гру камінь - нижниці - бумага за допомогою методів розглянутих на уроці

let variables = ['камінь', 'ножиці', 'папір'];
let value = String(prompt('Введіть одне із значень: "камінь", "ножиці", "папір"'));
let trimBoth = function(str) {
    return str.trimStart().trimEnd();
  };

let randomIndex = Math.floor(Math.random() * variables.length);
let computerChoice = variables[randomIndex];

let result = function comparison(){
    value = trimBoth(value);
    if (value == computerChoice){
        alert(`Ваш варіант: "${value}", варіант компютера: "${computerChoice}", маєте нічию`);
    }
    else if (value == 'камінь' && computerChoice == 'ножиці'){
        alert(`Ваш варіант: "${value}", варіант компютера: "${computerChoice}", вітаємо - ви виграли`);
        }
    else if (value == 'камінь' && computerChoice == 'папір'){
        alert(`Ваш варіант: "${value}", варіант компютера: "${computerChoice}", нажаль ви програли`);
        }
    else if (value == 'ножиці' && computerChoice == 'камінь'){
        alert(`Ваш варіант: "${value}", варіант компютера: "${computerChoice}", нажаль ви програли`);
        }
    else if (value == 'ножиці' && computerChoice == 'папір'){
        alert(`Ваш варіант: "${value}", варіант компютера: "${computerChoice}", вітаємо - ви виграли`);
        }
    else if (value == 'папір' && computerChoice == 'камінь'){
        alert(`Ваш варіант: "${value}", варіант компютера: "${computerChoice}", вітаємо - ви виграли`);
        }     
    else if (value == 'папір' && computerChoice == 'ножиці'){
        alert(`Ваш варіант: "${value}", варіант компютера: "${computerChoice}", нажаль ви програли`);
        }
    else {
        alert('Скористайтеся, будь ласка, українською мовою');
        }
    };

result();

// - Створити функцію яка повертає сторіччя, функція отримує рік:
// 1810 -> 19
// 1700 -> 17
// 1601 -> 17
// 2000 -> 20

let convertYear = function(year) {
    return Math.ceil(year / 100);
};

let years = [1810, 1700, 1601, 2000];
for (let i = 0; i < years.length; i++) {
    console.log(years[i] + ' -> ' + convertYear(years[i]));
}

// - Створити функцію яка отримує масив і тип. В функції з масиву вибираються всі типи що були передані і повертаються новим масивом

function getTypes(arr) {
    const types = [];
  
    for (let i = 0; i < arr.length; i++) {
      const type = typeof arr[i];
      types.push(type);
    }

    return types;
  }
  
  const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false']];
  const typesArray = getTypes(sort);

console.log(sort);
console.log(typesArray);
