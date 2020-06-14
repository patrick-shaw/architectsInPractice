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



const navbar = document.querySelector('header nav');
const menuToggle = document.querySelectorAll('#menu-toggle');
let togCount = true
const toggleMenu = () => {
    if (togCount) {
        navbar.style.display = 'block'
        navbar.style.transform = 'translateY(100vh)';
        document.body.style.overflowY = 'hidden';
        togCount = false;
    } else {
        navbar.style.transform = 'translateY(-100vh)';
        document.body.style.overflowY = 'auto';
        togCount = true;
    }
}

var y = window.matchMedia("(max-width: 576px)")
isMobileMenu(y)

window.addEventListener('resize', () => {
    isMobileMenu(y);
})


function isMobileMenu(y) {
    if (y.matches) { // If media query matches
        navbar.style.top = '-100vh';
        menuToggle.forEach((tog) => {
            tog.addEventListener('click', toggleMenu);
        })
    } else {
        navbar.style.top = '10px';
        navbar.style.transform = 'translateY(0)';
    }
}


