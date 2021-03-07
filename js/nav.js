const nav = document.querySelector("nav");
const navLogo = nav.querySelector("a h1");
const urlLinkList = document.querySelector(".navLinks");
const urlLinks = document.querySelectorAll(".navLinks > a");
const navShowBtn = document.querySelector("nav button");

let i = 0;
const URL = document.location.href;

let currentUrl = undefined;
for (let i = 0; i < urlLinks.length; i++) {
    currentUrl = urlLinks[i];
    if (currentUrl.href === URL) {
        currentUrl.classList.add("currentUrl");
    } else {
        currentUrl.classList.remove("currentUrl");
    }
}

setInterval(() => {
    if (navLogoBlinked) {
        if (i === 0) {
            navLogo.innerHTML = "Zipper";
            i = 1;
        } else if (i === 1) {
            navLogo.innerHTML = "Zipper_";
            i = 0;
        }
    }
}, 700);

setInterval(() => {
    if (window.scrollY >= 30) {
        nav.classList.add("shadow");
    } else {
        nav.classList.remove("shadow");
    }
}, 10);

let navLogoBlinked = true;
navLogo.addEventListener("mouseover", () => {
    navLogo.innerHTML = "Zipper";
    navLogo.classList.add("logoZoomIn");
    navLogoBlinked = false;
});

navLogo.addEventListener("mouseout", () => {
    navLogo.classList.remove("logoZoomIn");
    navLogoBlinked = true;
});

navShowBtn.addEventListener("click", () => {
    urlLinkList.classList.toggle("navLinkShow");
});