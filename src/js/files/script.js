// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

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

    if (menu) {
        console.log(menu.offsetWidth);
        menu.style.width = `${menu.offsetWidth}px`;
    }
};

loadMore();
scrollMenu();
