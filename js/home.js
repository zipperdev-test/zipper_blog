const homeTitleText = document.getElementById("homeTitleText");
const homeTitle = document.getElementById("homeTitleDiv");
const homeExplainDiv = document.getElementById("homeContainer");

setInterval(() => {
    if (window.scrollY <= 150) {
        homeTitle.style.filter = "blur(0px)";
    } else if (window.scrollY > 150 && window.scrollY < 1000) {
        homeTitle.style.filter = `blur(${window.scrollY  / 150}px)`;
    } else {
        homeTitle.style.filter = "blur(0px)";
    }
    if (window.scrollY >= 540) {
        homeExplainDiv.querySelector(":nth-of-type(1)").classList.add("showUp");
    }
    if (window.scrollY >= 1084) {
        homeExplainDiv.querySelector(":nth-of-type(2)").classList.add("showUp");
    }
    if (window.scrollY >= 1780) {
        homeExplainDiv.querySelector(":nth-of-type(3)").classList.add("showUp");
    }
}, 10);