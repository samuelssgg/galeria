// Gallery slider logic with sliding animation
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    const indicators = document.querySelectorAll('.indicator, .indicator-active');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        // Loop around
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        // Move slides container
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        // Remove active from all indicators
        indicators.forEach(ind => ind.classList.remove('indicator-active'));
        // Set active indicator
        if (indicators[index]) indicators[index].classList.add('indicator-active');
        currentIndex = index;
    }

    // Indicator click
    indicators.forEach((indicator, idx) => {
        indicator.addEventListener('click', () => {
            showSlide(idx);
        });
    });

    // Next/Prev
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Init
    showSlide(0);
});