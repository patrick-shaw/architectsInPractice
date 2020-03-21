const homeCont = document.getElementById('home-container');
const homeTitle = document.getElementById('home-title');

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

window.onload = () => {
    const homeProject = document.createElement('img');
    const projectLink = document.createElement('a');

    const randNum = (Math.ceil(Math.random() * 3));

    homeProject.src = `img/home-img/project-${randNum}.jpg`;

    homeTitleSelect(randNum);

    projectLink.href = `${homeTitle.innerHTML}.html`
    projectLink.appendChild(homeTitle)

    homeCont.appendChild(projectLink);
    homeCont.appendChild(homeProject);
}