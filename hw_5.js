// - створити функцію конструктор filmMaker яка отримує, назву фільму, рік виходу, рейтинг.

function filmMaker(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;
}

//- створити на прототипі filmMaker метод giveInfo яка виводить в консоль інформацію про фільм.

function filmMaker(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;
}
filmMaker.prototype.giveInfo = function() {
    return "Назва фільму:" + this.title + ", рік виходу:" + this.year + ", рейтинг:" + this.rating;
};

// - Розмістіть 5 фільмів створених через конструктор в масив і створіть функцію sortPopular(arr), яка приймає арей і сортує об’єкти за популярністю.

let movies = [
    new filmMaker("Фільм 1", 2019, 7.2),
    new filmMaker("Фільм 2", 2020, 8.0),
    new filmMaker("Фільм 3", 2020, 8.1),
    new filmMaker("Фільм 4", 2021, 7.7),
    new filmMaker("Фільм 5", 2022, 6.9)
];

function sortPopular(arr) {
    arr.sort(function(a, b) {
        return b.rating - a.rating;
      });
    }

sortPopular (movies);
console.log (movies);

// - створіть функцію sortYear(array, years) ця функція отримує масив фільмів і рік випуску. Повертає масив з фільмами цього року випуску.

function sortYear(array, years) {
    let result = array.filter(function(film){
        return years.includes(film.year);
    });
    return result;
}

let moviesOfYear = sortYear(movies, [2020, 2022]);
console.log(moviesOfYear);