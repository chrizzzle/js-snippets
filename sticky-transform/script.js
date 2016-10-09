var scrollPosition;
var ticking = false;
var secondSlide = document.querySelector('.slide.second');

window.addEventListener('scroll', onScroll);

function update() {
    var elementPos = secondSlide.offsetTop - window.pageYOffset;
    var scrollPos = elementPos > 0 ? 0 : elementPos * (-1);
    secondSlide.style.transform = 'translateY(' + scrollPos + 'px)';
    ticking = false;
}

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(update);
    }
    ticking = true;
}