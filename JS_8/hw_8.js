//  - реалізувати кнопку яка при кліку по кнопці відкриває меню, а при повторному кліку закриває меню.

window.onload = function(){
    const Btn = document.createElement ("button");
    Btn.textContent = "Open Menu";
    Btn.classList.add("menu-button");
    document.querySelector("header").appendChild(Btn);
    // Btn.classList.add("fontSize-25px", "color-red");

    const menu = document.getElementById("menu");

    let isMenuOpen = false;
    
    function toggleMenu () {
        isMenuOpen = !isMenuOpen;
        menu.style.display = isMenuOpen ? "block" : "none";
        Btn.classList.toggle('open', isMenuOpen);
        Btn.textContent = isMenuOpen ? "Close Menu" : "Open Menu";
    }
    Btn.onclick = function () {
        toggleMenu();
    };

// - створити кнопку, при кліку на яку збільшується розмір шрифту кнопки на 10рх.

    const button = document.createElement ("button");
    button.textContent = "grow +10px";
    document.querySelector("main").appendChild(button);
    button.style.marginTop = "15px";
    button.style.marginLeft = "30px";

    function toggleGrow () {
        const currentFS = parseInt(window.getComputedStyle(button).fontSize);
        const newFS = currentFS + 10;
        button.style.fontSize = `${newFS}px`;
    }
    button.onclick = function () {toggleGrow();
    };
};