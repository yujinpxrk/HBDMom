let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Calculate new slide index
    currentSlide += direction;

    // Loop back to first slide if we reach the end, and vice versa
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Update the transform property to show the correct slide
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}