const throughThings = document.querySelector("main.about .throughThings");
const throughThingsTitle = document.querySelector("main.about .throughThings #throughThingsTitle");
const aboutDecorationImg = document.querySelectorAll(".aboutDecorationImg > *");

setInterval(() => {
    if (throughThings.scrollTop >= 30) {
        throughThingsTitle.classList.add("shadow");
    } else {
        throughThingsTitle.classList.remove("shadow");
    }
    if (window.scrollY >= 0) {
        aboutDecorationImg[0].classList.add("fadeIn");
    }
    if (window.scrollY >= 10) {
        aboutDecorationImg[1].classList.add("fadeIn");
    }
    if (window.scrollY >= 640) {
        aboutDecorationImg[2].classList.add("fadeIn");
    }
}, 10);