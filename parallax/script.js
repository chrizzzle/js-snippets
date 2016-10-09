var ticking = false;
var circle1 = document.querySelector('#circle1');
var circle2 = document.querySelector('#circle2');
var circle3 = document.querySelector('#circle3');
var circle4 = document.querySelector('#circle4');
var circle5 = document.querySelector('#circle5');
var circle6 = document.querySelector('#circle6');
var circle7 = document.querySelector('#circle7');
var circle8 = document.querySelector('#circle8');

var els = [{
    slide: circle1,
    speed: -3
}, {
    slide: circle2,
    speed: 0.1
}, {
    slide: circle3,
    speed: 0.015
}, {
    slide: circle4,
    speed: 0.066
}, {
    slide: circle5,
    speed: 0.01
}, {
    slide: circle6,
    speed: 0.08
}, {
    slide: circle7,
    speed: 0.07
}, {
    slide: circle8,
    speed: 0.05
}];

window.addEventListener('scroll', onScroll);

function update() {
    var pageYOffset = window.pageYOffset;

    els.forEach(function (el) {
        var elementPos = (el.slide.offsetTop * pageYOffset) / 100 * (-1);
        el.slide.style.transform = 'translateY(' + (elementPos * el.speed) + 'px)';
    });
    ticking = false;

}

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(update);
    }
    ticking = true;
}