const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const divs = mainSlide.querySelectorAll('div');
const slidesCount = divs.length;
sidebar.style.top = `-${(slidesCount - 1)*100}vh`;

let activeSlideIndex = 0;
const upStr = 'up';
const downStr = 'down';

upBtn.addEventListener('click', () => {
    changeSlide(upStr);
});

downBtn.addEventListener('click', () => {
    changeSlide(downStr);
});

function changeSlide(direction) {
    //console.log(direction);
    if (direction === upStr) {
        //console.log(upStr);
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === downStr) {
        //console.log(downStr);
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;
    //console.log(height);
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};