const projectList = document.querySelector(".project .projects");
const projects = document.querySelectorAll(".projectDiv");

for (let i = 0; i < postList.length; i++) {
    const divProject = document.createElement("div");
    const divImg = document.createElement("div");
    const divText = document.createElement("div");
    const divShortDes = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const shortDes = document.createElement("h4");
    const date = document.createElement("p");

    divProject.className = "projectDiv";
    divProject.dataset.id = i + 1;
    divImg.className = "projectImgBox";
    divText.className = "projectTextBox";
    divShortDes.className = "projectTextDescription";
    img.src = `../contents/posts/${postList[i].img}.png`;
    title.innerHTML = postList[i].title;
    if(postList[i].description.length >= 50) {
        shortDes.innerHTML = `${postList[i].description.slice(0, 50)}...`;
    } else {
        shortDes.innerHTML = postList[i].description;
    }
    date.innerHTML = postList[i].date;

    divShortDes.appendChild(shortDes);
    divImg.appendChild(img);
    divText.appendChild(title);
    divText.appendChild(divShortDes);
    divText.appendChild(date);
    divProject.appendChild(divImg);
    divProject.appendChild(divText);
    
    divProject.addEventListener("click", () => {
        window.location.href = `../pages/onePost.html?id=${divProject.dataset.id}`;
    });

    projectList.appendChild(divProject);
}