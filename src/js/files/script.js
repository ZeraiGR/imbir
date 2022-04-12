// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
import { bodyLock, bodyUnlock } from './functions.js';

export function headerFixed() {
    const header = document.querySelector('.header'),
        windowHeight = document.documentElement.clientHeight,
        arrowTopBtn = document.querySelector('.arrow-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > windowHeight) {
            header.classList.add('fixed');
            arrowTopBtn.classList.add('active');
        } else {
            header.classList.remove('fixed');
            arrowTopBtn.classList.remove('active');
        }
    });
}

const loadMore = () => {
    const cards = document.querySelectorAll('.pupular__item'),
        btn = document.querySelector('.pupular__btn');

    if (cards.length > 0 && btn) {
        if (document.documentElement.clientWidth <= 525) {
            btn.classList.add('active');

            let counter = 2;
            hideElems(cards, counter);

            btn.addEventListener('click', function () {
                counter++;
                hideElems(cards, counter);

                if (counter == cards.length - 1) {
                    btn.classList.remove('active');
                }
            });
        }
    }
};

const hideElems = (cards, counter) => {
    for (let i = 0; i < cards.length; i++) {
        let currentCard = cards[i];

        if (i > counter) {
            currentCard.classList.add('hide');
        } else {
            currentCard.classList.remove('hide');
        }
    }
};

const scrollMenu = () => {
    const menu = document.querySelector('.recipes__menu');

    if (menu && document.documentElement.clientWidth < 768) {
        console.log(menu.offsetWidth);
        menu.style.width = `${menu.offsetWidth}px`;
    }
};

const filterHandler = () => {
    const filterBtn = document.querySelector('.shop__toggle'),
        filterPanel = document.querySelector('.shop__sidebar');

    if (filterBtn && filterPanel) {
        filterBtn.addEventListener('click', function () {
            filterBtn.classList.toggle('active');
            filterPanel.classList.toggle('active');
        });
    }
};

const basketHandler = () => {
    const basketBtn = document.querySelector('.menu__link--basket'),
        basketMenu = document.querySelector('.menu__basket-info'),
        root = document.documentElement;

    if (basketBtn && basketMenu) {
        basketBtn.addEventListener('click', function () {
            if (!root.classList.contains('menu-open')) {
                basketMenu.classList.toggle('active');
                if (document.documentElement.clientWidth <= 992) {
                    root.classList.add('basket-open');
                    bodyLock();
                }
            }
        });

        window.addEventListener('click', (e) => {
            let target = e.target;

            if (
                !target.closest('.menu__basket-info') &&
                !target.closest('.menu__link--basket')
            ) {
                if (!root.classList.contains('menu-open')) {
                    basketMenu.classList.remove('active');
                    if (document.documentElement.clientWidth <= 992) {
                        root.classList.remove('basket-open');
                        bodyUnlock();
                    }
                }
            }
        });
    }
};

loadMore();
scrollMenu();
filterHandler();
basketHandler();
