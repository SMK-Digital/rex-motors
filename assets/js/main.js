
// const sliderContainer = document.querySelector('.slider-container');

// const slideRight = document.querySelector('.right-slide');
// const slideLeft = document.querySelector('.left-slide');

// const upButton = document.querySelector('.up-button');
// const downButton = document.querySelector('.down-button');

// const slidesLength = slideLeft.querySelectorAll('div').length;

// let activeSliderIndex = 0;

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;


// upButton.addEventListener('click', () => changeSlide('up'));
// downButton.addEventListener('click', () => changeSlide('down'));

// const changeSlide = (direction) => {
//     const sliderHeight = sliderContainer.clientHeight;
//     if (direction === 'up') {
//         activeSliderIndex++;
//         if (activeSliderIndex > slidesLength - 1) {
//             activeSliderIndex = 0;
//         }
//     } else if (direction === 'down') {
//         activeSliderIndex--;
//         if (activeSliderIndex < 0) {
//             activeSliderIndex = slidesLength - 1;
//         }
//     }

//     slideRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight
//         }px)`;
//     slideLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight
//         }px)`;
// };

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSliderIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Função para mudar os slides
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if (direction === 'up') {
        activeSliderIndex++;
        if (activeSliderIndex > slidesLength - 1) {
            activeSliderIndex = 0;
        }
    } else if (direction === 'down') {
        activeSliderIndex--;
        if (activeSliderIndex < 0) {
            activeSliderIndex = slidesLength - 1;
        }
    }

    // Movimentação dos slides
    slideRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`;
};

// Adiciona os event listeners para os botões de navegação manual
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Função para navegação automática
const autoSlide = () => {
    changeSlide('up');
};

// Inicia a navegação automática (muda o slide a cada 5 segundos)
let autoSlideInterval = setInterval(autoSlide, 5000);

// Função para resetar o intervalo quando o usuário interagir (navegar manualmente)
const resetAutoSlide = () => {
    clearInterval(autoSlideInterval); // Para a navegação automática
    autoSlideInterval = setInterval(autoSlide, 5000); // Reinicia a navegação automática
};

// Reseta a navegação automática quando o usuário interage com os botões
upButton.addEventListener('click', resetAutoSlide);
downButton.addEventListener('click', resetAutoSlide);

