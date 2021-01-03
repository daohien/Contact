function header(){
    var header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
        var y = window.scrollY;
        if (y > 100) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
}

header()

function nav() {
    var nav_bar = document.getElementsByClassName("navbar");
    var nav_menu = document.getElementsByClassName("nav-menu");
    var close = document.getElementsByClassName("close");
    var check = "check1";
    nav_bar[0].addEventListener("click", function () {
        nav_menu[0].classList.add("active");
        nav_bar[0].classList.add("active");
    });
    close[0].addEventListener("click", function () {
        nav_menu[0].classList.remove("active");
        nav_bar[0].classList.remove("active");
        // if (check == "check1") {
        //     check = "check2";
        //     nav_menu[0].classList.add("active");
        //     nav_menu[0].classList.remove("active");
        // } else {
        //     check = "check1";
        //     close[0].classList.remove("active")
        // }
    });
}
nav();