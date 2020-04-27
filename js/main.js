//get the current year of the copyright
$('#year').text(new Date().getFullYear());

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
        offset: 50
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