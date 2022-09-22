$(document).ready(function() {
    // Navbar-menu-Active-Class Add
    $("ul.menu li.menu-item").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });



    //Typing Scripts
    var typed = new Typed(".tying", {
        strings: ["ready to give maximum service", "by your side in your service "],
        typeSpeed: 100,
        backSpeed: 10,
        loop: true
    });

    //Typing Scripts
    var typed = new Typed(".tying2", {
        strings: ["specialist", "CARDIOLOGY", "DENTAL UNIT"],
        typeSpeed: 150,
        backSpeed: 10,
        loop: true
    });
    //Typing Scripts
    var typed = new Typed(".tying3", {
        strings: ["CRITICAL CARE MEDICINE", "DERMATOLOGY", "DIABETOLOGY"],
        typeSpeed: 150,
        backSpeed: 10,
        loop: true
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

    /************Department details Faculty owl carousel******/
    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            autoplay: false,
            loop: false,
            autoplayTimeout: 2000,
            smartSpeed: 300,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 4,
                }
            }
        });
    });


});