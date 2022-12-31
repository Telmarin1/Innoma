"use strict";
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.menu');
if (headerBurger) {
    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}

/* ------------------------spoiler------------------------ */

// const headers = document.querySelectorAll("[data-name='spoiler-title']");

// headers.forEach(function (item) {
//     item.addEventListener("click", headerClick);
// });

// function headerClick() {
//     this.nextElementSibling.classList.toggle("spoiler-body");
// }

$(document).ready(function () {
    $('.accordion__block').click(function (event) {
        if ($('.program__accordion').hasClass('accordion')) {
            $('.accordion__block').not($(this)).removeClass('active');
            $('.accordion__spoiler').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

new Swiper('.expert-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});


const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;  //- document.querySelector('header').offsetHeight;

            if (headerBurger.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                headerBurger.classList.remove('_active');
                headerMenu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


const openPopup = document.getElementById('open__popup');
const closePopup = document.getElementById('close__popup');
const popup = document.getElementById('popup');

 closePopup.addEventListener('click', function (e) {
     e.preventDefault();
     popup.classList.remove('_active');
     document.body.classList.remove('_lock');

 })

openPopup.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('_active');
    popup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
            popup.classList.remove('_active');
            document.body.classList.remove('_lock');
        }
    });
    document.body.classList.add('_lock');
})




