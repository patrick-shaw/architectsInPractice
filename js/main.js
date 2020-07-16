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
const readMore = document.getElementById('read-more');
readMore.addEventListener('click', () => {
    setTimeout(() => {
        !readMore.classList.contains('collapsed') ? readMore.innerHTML = 'Read less' : readMore.innerHTML = 'Read more.'
    }, 200)
})
