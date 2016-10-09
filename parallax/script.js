var ticking = false;
var secondSlide = document.querySelector('.slide.second');
var thirdSlide = document.querySelector('.slide.third');
var fourthSlide = document.querySelector('.slide.fourth');
var fifthSlide = document.querySelector('.slide.fifth');
var sixthSlide = document.querySelector('.slide.sixth');
var seventhSlide = document.querySelector('.slide.seventh');

var els = [{
    slide: secondSlide,
    speed: 0.3
}, {
    slide: thirdSlide,
    speed: 0.5
}, {
    slide: fourthSlide,
    speed: 0.7
}, {
    slide: fifthSlide,
    speed: 0.9
}, {
    slide: sixthSlide,
    speed: 1
}, {
    slide: seventhSlide,
    speed: 1.1
}];

window.addEventListener('scroll', onScroll);

function update() {
    var pageYOffset = window.pageYOffset;

    els.forEach(function (el) {
        var elementPos = (el.slide.offsetTop * pageYOffset) / 100 * (-1);
        el.slide.style.transform = 'translateY(' + (elementPos * el.speed / 100) + '%)';
    });
    ticking = false;

}

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(update);
    }
    ticking = true;
}