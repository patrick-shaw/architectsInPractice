//get the current year of the copyright
$('#year').text(new Date().getFullYear());

// SCROLL MAGIC IMAGE FADE IN
const controller = new ScrollMagic.Controller();
const images = document.querySelectorAll('.img-mb');

images.forEach(image => {
    new ScrollMagic.Scene({
        triggerElement: image,
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle(image, 'visible')
        .addTo(controller);
})