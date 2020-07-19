//get the current year of the copyright
$('#year').text(new Date().getFullYear());

//MOBILE NAVBAR

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

var x = window.matchMedia("(max-width: 576px)")
isMobileMenu(x)

window.addEventListener('resize', () => {
    isMobileMenu(x);
    removeCollapse(x);
})


function isMobileMenu(x) {
    if (x.matches) { // If media query matches
        navbar.style.top = '-100vh';
        menuToggle.forEach((tog) => {
            tog.addEventListener('click', toggleMenu);
        })
    } else {
        navbar.style.top = '10px';
        navbar.style.transform = 'translateY(0)';
    }
}

// SCROLL MAGIC IMAGE FADE IN
const controller = new ScrollMagic.Controller();
const images = document.querySelectorAll('.img-mb');
const projImg = document.querySelectorAll('.proj-img');

images.forEach(image => {
    new ScrollMagic.Scene({
        triggerElement: image,
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle(image, 'visible')
        .addTo(controller);
})

projImg.forEach(image => {
    new ScrollMagic.Scene({
        triggerElement: image,
        triggerHook: 0.9,
        offset: 0
    })
        .setClassToggle(image, 'visible')
        .addTo(controller);
})


//italic project title

const projectContainer = document.querySelectorAll('.project-pb');

projectContainer.forEach(item => {
    const projImg = item.querySelector('img');
    const title = item.querySelector('h2');
    console.log(projImg);

    projImg.addEventListener('mouseover', () => {
        title.classList.add('italic');
    })
    projImg.addEventListener('mouseout', () => {
        title.classList.remove('italic');
    })
})

//read more collapsed
const readMore = document.querySelectorAll('#read-more');
readMore.forEach(item => {
    item.addEventListener('click', () => {
        const personInfo = item.closest('.person-info-wrap');
        !personInfo.classList.contains('info-height') ? personInfo.classList.add('info-height') : personInfo.classList.remove('info-height');
        setTimeout(() => {
            !personInfo.classList.contains('info-height') ? item.innerHTML = 'Read more' : item.innerHTML = 'Read less'
        }, 200)
    })
})


const personCollapse = document.querySelectorAll('#collapse-readmore');



function removeCollapse(x) {
    personCollapse.forEach((item) => {
        if (!x.matches) {
            item.classList.remove('collapse');
        } else {
            item.classList.add('collapse');
        }
    })
}

removeCollapse(x);

