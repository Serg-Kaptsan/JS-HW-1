//  - реалізувати кнопку яка при кліку по кнопці відкриває меню, а при повторному кліку закриває меню.

window.onload = function(){
    const Btn = document.createElement ("button");
    Btn.textContent = "Open Menu";
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
};


