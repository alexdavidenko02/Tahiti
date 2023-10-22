$(document).ready(function(){
    $('.slider1').slick({
        arrows: true,
        slidesToShow: 1,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        pauseOnHover: false,
        asNavFor: ".slider2",
        infinite: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.slider2').slick({
        arrows: false,
        slidesToShow: 4,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        asNavFor: ".slider1",
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

function selectItem(element) {
    var text = element.textContent;
    document.getElementById('dropdownButton').textContent = text;
}
  

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const body = document.querySelector('body');

    const closeMenu = () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('menu_active');
        body.style.overflow = 'auto';
    };

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        body.style.overflow = menu.classList.contains('menu_active') ? 'hidden' : 'auto';
    });


    document.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (!menu.contains(targetElement) && !hamburger.contains(targetElement)) {
            closeMenu(); 
        }
    });
});
  