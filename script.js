let currentIndex = 0;
const categories = document.querySelectorAll('.category');
const totalCategories = categories.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('.slider');

function updateSlider() {
    const offset = -currentIndex * 25; // Każda kategoria zajmuje 25% szerokości
    slider.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCategories - 4; // Zawija na początek
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalCategories - 4) {
        currentIndex++;
    } else {
        currentIndex = 0; // Zawija na początek
    }
    updateSlider();
});
