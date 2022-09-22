$(document).ready(function() {
    // Navbar-menu-Active-Class Add
    $("ul.menu li.menu-item").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    /////////////////////////NAVBAR MENU ACTIVE JS END

    // toggle menu/navbar Scripts
    $('.menu-btn').click(function() {
        $('.navbar .menu ').toggleClass("active");
        $('.navbar i ').toggleClass("active");
    });
    // Owl Coursel Js
    $('#slider-owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});