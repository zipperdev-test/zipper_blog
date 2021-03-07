const oneProject = document.querySelector("main.oneProject");
const hrefParams = getIdFromHref();
const projectId = hrefParams.id;

const projectImg = document.getElementById("projectImg");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectDate = document.getElementById("projectDate");

function getIdFromHref(){
    const url = document.location.href;
    const qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
};

function init() {
    if(postList[projectId - 1] !== undefined) {
        projectImg.src = `../contents/posts/${postList[projectId - 1].img}.png`;
        projectTitle.innerText = postList[projectId - 1].title;
        projectDescription.innerText = postList[projectId - 1].description;
        projectDate.innerText = postList[projectId - 1].date;
    } else {
        projectImg.remove({});
        projectTitle.remove({});
        projectDescription.remove({});
        projectDate.remove({});
        const noneElement = document.createElement("h1");
        const noneDes = document.createElement("h3");
        noneElement.innerHTML = "404 Page";
        noneDes.innerHTML = "You reached the end";
        noneElement.style.paddingTop = "123px"
        noneElement.style.fontFamily = "'Roboto', sans-serif";
        noneDes.style.paddingBottom = "123px";
        noneDes.style.fontFamily = "'Ubuntu', sans-serif";

        oneProject.appendChild(noneElement);
        oneProject.appendChild(noneDes);
    }
}

init();


