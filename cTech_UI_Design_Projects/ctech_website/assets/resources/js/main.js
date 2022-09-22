$(document).ready(function() {
    // Navbar-menu-Active-Class Add
    $(".navbar li").click(function() {
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

        $('.nav_item').toggleClass("active");
        $('.navbar i').toggleClass("active");
    });



    //Typing Scripts
    var typed = new Typed(".tying", {
        strings: ["OpenMRS, OpenMRS+, ", "Scale up share health record (SHR)"],
        typeSpeed: 100,
        backSpeed: 10,
        loop: true
    });

    //Typing Scripts
    var typed = new Typed(".tying2", {
        strings: ["OPD (Outdoor Patient Department)", "Pharmacy", "Inventory"],
        typeSpeed: 150,
        backSpeed: 10,
        loop: true
    });
    //Typing Scripts
    var typed = new Typed(".tying3", {
        strings: ["Administration", "ITES"],
        typeSpeed: 150,
        backSpeed: 10,
        loop: true
    });
    // Owl Coursel Js
    $('#slider-owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 20000,
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
    });
    // Owl Coursel Js
    $('#slider-owl-carousel1').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 3,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // Owl Coursel Js
    $('#our_client').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 3,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    mixitup(".emon");
    $(".slider").slick({ infinite: !0, slidesToShow: 1, slidesToScroll: 1 }),
        $(".top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, 2e3);
        }),
        $(window).scroll(function() {
            $(window).scrollTop() < 500 ? $(".top").fadeOut() : $(".top").fadeIn();
        });

});