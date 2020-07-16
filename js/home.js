const homeCont = document.getElementById('home-container');
const homeTitle = document.getElementById('home-title');
//const randNum = (Math.ceil(Math.random() * 5));
const homeProject = document.createElement('img');
const projectLink = document.createElement('a');


let count;
if (localStorage.getItem('homeLoadCount') === null) {
    count = 1
} else {
    count = localStorage.getItem('homeLoadCount');
    count++;
}
if (count > 6) count = 1;

localStorage.setItem('homeLoadCount', count);

function homeTitleSelect() {
    if (count === 1 || count === 2) {
        homeTitle.innerHTML = "Gatehouse School"
    } else if (count === 3 || count === 4) {
        homeTitle.innerHTML = "Reardon Street"
    } else if (count === 5 || count === 6) {
        homeTitle.innerHTML = "Chimney Terrace"
    }
}

const a = window.matchMedia('(max-width: 575px)'); //MOBILE
const b = window.matchMedia('(min-width: 576px) and (max-width: 769px)'); //TABLET
const c = window.matchMedia('(min-width: 770px) and (max-width: 1399px)'); //SMALL LAPTOP
const d = window.matchMedia('(min-width: 1400px) and (max-width: 1499px)'); //MEDIUM LAPTOP
const f = window.matchMedia('(min-width: 1500px)'); //DESKTOP

function homeImgSelect() {

    if (a.matches) {
        homeProject.src = `img/home-img/4_Mobile/${count}.jpg`;
    } else if (b.matches) {
        homeProject.src = `img/home-img/3_Tablet/${count}.jpg`;
    } else if (c.matches) {
        homeProject.src = `img/home-img/1_Desktop/${count}.jpg`;
    } else if (d.matches) {
        homeProject.src = `img/home-img/2_Laptop/${count}.jpg`;
    } else if (f.matches) {
        homeProject.src = `img/home-img/1_Desktop/${count}.jpg`;
    }

    a.addListener(function (e) {
        if (e.matches) {
            console.log('MOBILE');
            homeProject.src = `img/home-img/4_Mobile/${count}.jpg`;
        }
    });

    b.addListener(function (e) {

        if (e.matches) {
            console.log('TABLET');
            homeProject.src = `img/home-img/3_Tablet/${count}.jpg`;
        }
    });

    c.addListener(function (e) {

        if (e.matches) {

            console.log('LAPTOP');

            homeProject.src = `img/home-img/1_Desktop/${count}.jpg`;

        }
    });

    d.addListener(function (e) {

        if (e.matches) {

            console.log('DESKTOP');
            homeProject.src = `img/home-img/2_Laptop/${count}.jpg`;

        }
    });
    f.addListener(function (e) {

        if (e.matches) {

            console.log('DESKTOP');
            homeProject.src = `img/home-img/1_Desktop/${count}.jpg`;

        }
    });

    homeCont.appendChild(homeProject);
}

homeImgSelect();
homeTitleSelect();









// function homeTitleSelect(num) {
//     if (num === 1) {
//         homeTitle.innerHTML = "Reardon Street"
//     } else if (num === 2) {
//         homeTitle.innerHTML = "Chimney Terrace"
//     } else if (num === 3) {
//         homeTitle.innerHTML = "Gatehouse School"
//     } else if (num === 4) {
//         homeTitle.innerHTML = "Ossory"
//     } else if (num === 5) {
//         homeTitle.innerHTML = "America Square"
//     }
// }

// const homeProject = document.createElement('img');
// const projectLink = document.createElement('a');

// function homeImgSelect(x) {

//     if (x.matches) {
//         homeProject.src = `img/home-img/laptop/project-${randNum}.jpg`;
//     } else {
//         homeProject.src = `img/home-img/desktop/project-${randNum}.jpg`;
//     }

//     homeTitleSelect(randNum);

//     let link = homeTitle.innerHTML.replace(/\s+/g, '-').toLowerCase();

//     projectLink.href = `projects/${link}.html`
//     projectLink.appendChild(homeTitle)

//     homeCont.appendChild(projectLink);
//     homeCont.appendChild(homeProject);
// }

// function homeImgScreenChange(x) {
//     if (x.matches) {
//         homeProject.src = `img/home-img/laptop/project-${randNum}.jpg`;

//     } else {
//         homeProject.src = `img/home-img/desktop/project-${randNum}.jpg`;
//     }
// }


// const x = window.matchMedia("(max-width: 1600px)")

// homeImgSelect(x);

// x.addListener(homeImgScreenChange);



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


