$(document).ready(function() {
    // Navbar-menu-Active-Class Add
    $(".main_menu > li").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(window).scroll(function() {
        var ourWindow = $(window).scrollTop();

        if (ourWindow < 500) {
            $('.top').fadeOut(2000);
        } else {
            $('.top').fadeIn(2000);
        }

        /***Navbar-fixed-Start Here***/

        if (ourWindow > 100) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    });
    // toggle menu/navbar Scripts
    $('.menu-btn').click(function() {

        $('.main_menu').toggleClass("active");
        $('.menu_section i').toggleClass("active");
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