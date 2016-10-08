var scrollPosition;
var secondSlide = document.querySelector('.slide.second');

window.addEventListener('scroll', onScroll);

function update() {
    var elementPos = secondSlide.scrollHeight - window.pageYOffset;
    var scrollPos = elementPos > 0 ? 0 : elementPos * (-1);
    secondSlide.style.transform = 'translateY(' + scrollPos + 'px)';
}

function onScroll() {
    window.requestAnimationFrame(update);
}