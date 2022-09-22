// $(document).ready(function(){(new WOW).init(),$(window).scroll(function(){$(window).scrollTop()>600?$("body").addClass("fixed"):$("body").removeClass("fixed")}),$(".navbar-nav li").click(function(){$(this).addClass("active").siblings().removeClass("active")}),$(".portfolio-item ul li").click(function(){$(this).addClass("active").siblings().removeClass("active")}),$(".bulet-point ul li").click(function(){$(this).addClass("active").siblings().removeClass("active")});mixitup(".emon");$(".slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".top").click(function(){$("html, body").animate({scrollTop:0},2e3)}),$(window).scroll(function(){$(window).scrollTop()<500?$(".top").fadeOut():$(".top").fadeIn()})});



$(document).ready(function() {
    new WOW().init(),
        $(window).scroll(function() {
            $(window).scrollTop() > 600 ? $("body").addClass("fixed") : $("body").removeClass("fixed");
        }),
        $(".navbar-nav li").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
        }),
        $(".portfolio-item ul li").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
        }),
        $(".bulet-point ul li").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
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