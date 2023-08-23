const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
slideIndex = (slideIndex - 1 + slideCount) % slideCount;
updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
slideIndex = (slideIndex + 1) % slideCount;
updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
slides.forEach((slide, index) => {
if (index === slideIndex) {
slide.style.display = 'block';
} else {
slide.style.display = 'none';
}
});
}

// Инициализация слайдера
updateSlider();

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header-container');


navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header-container--mobile');
    document.body.classList.toggle('no-scroll');
}

