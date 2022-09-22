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

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

});