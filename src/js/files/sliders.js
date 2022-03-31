/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
    //BildSlider
    let sliders = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    if (sliders) {
        sliders.forEach((slider) => {
            slider.parentElement.classList.add('swiper');
            slider.classList.add('swiper-wrapper');
            for (const slide of slider.children) {
                slide.classList.add('swiper-slide');
            }
        });
    }
}
// Инициализация слайдеров
function initSliders() {
    // Добавление классов слайдера
    // при необходимости отключить
    bildSliders();

    // Перечень слайдеров
    if (document.querySelector('.swiper')) {
        new Swiper('.product-slider__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            speed: 800,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            pagination: {
                el: '.product-slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.product-slider__arrow--next',
                prevEl: '.product-slider__arrow--prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                370: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            on: {},
        });

        new Swiper('.newsline-slider__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            speed: 800,
            loop: true,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            pagination: {
                el: '.product-slider__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.product-slider__arrow--next',
                prevEl: '.product-slider__arrow--prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                450: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                600: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1441: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
                1600: {
                    slidesPerView: 7,
                    spaceBetween: 30,
                },
            },
            on: {},
        });

        if (document.documentElement.clientWidth <= 768) {
            new Swiper('.promo__slider ', {
                modules: [Navigation, Pagination],
                observer: true,
                observeParents: true,
                speed: 800,
                pagination: {
                    el: '.promo__pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    525: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    670: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                },
                on: {},
            });
        }
    }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
    // Добавление классов слайдера
    // при необходимости отключить
    bildSliders();

    let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar =
                sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false,
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }
}

window.addEventListener('load', function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});
