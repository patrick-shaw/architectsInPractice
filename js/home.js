const homeCont = document.getElementById('home-container');
const homeTitle = document.getElementById('home-title');
const randNum = (Math.ceil(Math.random() * 3));


function homeTitleSelect(num) {
    if (num === 1) {
        homeTitle.innerHTML = "Project-single"
    } else if (num === 2) {
        homeTitle.innerHTML = "Project-single"
    } else if (num === 3) {
        homeTitle.innerHTML = "Project-single"
    } else if (num === 4) {
        homeTitle.innerHTML = "Project-single"
    } else if (num === 5) {
        homeTitle.innerHTML = "Project-single"
    } else if (num === 6) {
        homeTitle.innerHTML = "Project-single"
    }
}

const homeProject = document.createElement('img');
const projectLink = document.createElement('a');

function homeImgSelect(x) {

    if (x.matches) {
        homeProject.src = `img/home-img/laptop/project-${randNum}.jpg`;

    } else {
        homeProject.src = `img/home-img/desktop/project-${randNum}.jpg`;
    }

    homeTitleSelect(randNum);

    projectLink.href = `${homeTitle.innerHTML}.html`
    projectLink.appendChild(homeTitle)

    homeCont.appendChild(projectLink);
    homeCont.appendChild(homeProject);
}

function homeImgScreenChange(x) {
    if (x.matches) {
        homeProject.src = `img/home-img/laptop/project-${randNum}.jpg`;

    } else {
        homeProject.src = `img/home-img/desktop/project-${randNum}.jpg`;
    }
}


const x = window.matchMedia("(max-width: 1600px)")

homeImgSelect(x);

x.addListener(homeImgScreenChange);




