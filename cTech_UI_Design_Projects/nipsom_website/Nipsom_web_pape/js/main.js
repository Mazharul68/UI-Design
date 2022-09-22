$(document).ready(function(){
    // Navbar-menu-Active-Class Add
    $("ul li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
/////////////////////////NAVBAR MENU ACTIVE JS END

        ///MAIN NAVBAR JS START HERE
        // Academic menus
        var quickLinks = $('.navbar .academic-relative');
        quickLinks.on({
            mouseenter:function(){
            $('.navbar .menu .academic-dropdown').addClass('cart-visible');
            // // //Plus icon Change on Hover
            // // $('.navbar a.event').addClass("active");
            }
            });
            var quickLinks = $('.navbar .academic-menu');
            quickLinks.on({
            mouseleave:function(){
            $('.navbar .menu .academic-dropdown').removeClass('cart-visible');
            // //Plus icon Change on Hover
            // $('.navbar a.event').removeClass("active");
            }
            });
            $("body").on('click', function() {
                $(".academic-dropdown").removeClass('cart-visible');
            });
            // Academic end
             // publications menus Start
        var quickLinks = $('.navbar .publication');
        quickLinks.on({
            mouseenter:function(){
            $('.navbar .menu .publication-dropdown').addClass('cart-visible');
            // // //Plus icon Change on Hover
            // // $('.navbar a.event').addClass("active");
            }
            });
            var quickLinks = $('.navbar .publication-menu');
            quickLinks.on({
            mouseleave:function(){
            $('.navbar .menu .publication-dropdown').removeClass('cart-visible');
            // //Plus icon Change on Hover
            // $('.navbar a.event').removeClass("active");
            }
            });
            $("body").on('click', function() {
                $(".academic-dropdown").removeClass('cart-visible');
            });
            // publications menus End
              // activities menus Start
        var quickLinks = $('.navbar .activities');
        quickLinks.on({
            mouseenter:function(){
            $('.navbar .menu .activities-dropdown').addClass('cart-visible');
            // // //Plus icon Change on Hover
            // // $('.navbar a.event').addClass("active");
            }
            });
            var quickLinks = $('.navbar .activities-menu');
            quickLinks.on({
            mouseleave:function(){
            $('.navbar .menu .activities-dropdown').removeClass('cart-visible');
            // //Plus icon Change on Hover
            // $('.navbar a.event').removeClass("active");
            }
            });
            $("body").on('click', function() {
                $(".activities-dropdown").removeClass('cart-visible');
            });
            // activities menus End

            // Facilities menus Start
        var quickLinks = $('.navbar .facilities');
        quickLinks.on({
            mouseenter:function(){
            $('.navbar .menu .facilities-dropdown').addClass('cart-visible');
            // // //Plus icon Change on Hover
            // // $('.navbar a.event').addClass("active");
            }
            });
            var quickLinks = $('.navbar .facilities-menu');
            quickLinks.on({
            mouseleave:function(){
            $('.navbar .menu .facilities-dropdown').removeClass('cart-visible');
            // //Plus icon Change on Hover
            // $('.navbar a.event').removeClass("active");
            }
            });
            $("body").on('click', function() {
                $(".facilities-dropdown").removeClass('cart-visible');
            });
            // Facilities menus End

            // Facilities menus Start
        var quickLinks = $('.navbar .language');
        quickLinks.on({
            mouseenter:function(){
            $('.navbar .menu .language-dropdown').addClass('cart-visible');
            // // //Plus icon Change on Hover
            // // $('.navbar a.event').addClass("active");
            }
            });
            var quickLinks = $('.navbar .language-menu');
            quickLinks.on({
            mouseleave:function(){
            $('.navbar .menu .language-dropdown').removeClass('cart-visible');
            // //Plus icon Change on Hover
            // $('.navbar a.event').removeClass("active");
            }
            });
            // Facilities menus End
            // Sub Mene Department////////////////////
            var quickLinks = $('.navbar .department');
            quickLinks.on({
            mouseenter:function(){
             $('.navbar .menu .department-menu').addClass('cart-visible');
            // // //Plus icon Change on Hover
            // // $('.navbar a.event').addClass("active");
            }
            });
            var quickLinks = $('.navbar .d-menu span');
            quickLinks.on({
            mouseleave:function(){
            $('.navbar .menu .department-menu').removeClass('cart-visible');
            // //Plus icon Change on Hover
            // $('.navbar a.event').removeClass("active");
            }
            });
            $("body").on('click', function() {
                $(".department-menu").removeClass('cart-visible');
            });
            // Sub Mene Department END////////////////////

             // Sub Sub Program Menu////////////////////
             var quickLinks = $('.navbar .program');
             quickLinks.on({
             mouseenter:function(){
             $('.navbar .menu .program-menu').addClass('cart-visible');
             // // //Plus icon Change on Hover
             // // $('.navbar a.event').addClass("active");
             }
             });
             var quickLinks = $('.navbar .d-menu span.program-hidden');
             quickLinks.on({
             mouseleave:function(){
             $('.navbar .menu .program-menu').removeClass('cart-visible');
             // //Plus icon Change on Hover
             // $('.navbar a.event').removeClass("active");
             }
             });
             $("body").on('click', function() {
                 $(".program-menu").removeClass('cart-visible');
             });
                // Sub Sub Program END////////////////////

                // Sub Sub Jopsom Menu////////////////////
             var quickLinks = $('.navbar .jopsom');
             quickLinks.on({
             mouseenter:function(){
             $('.navbar .menu .jopsom-menu').addClass('cart-visible');
             // // //Plus icon Change on Hover
             // // $('.navbar a.event').addClass("active");
             }
             });
             var quickLinks = $('.navbar .d-menu3 span.jopsom-hidden');
             quickLinks.on({
             mouseleave:function(){
             $('.navbar .menu .jopsom-menu').removeClass('cart-visible');
             // //Plus icon Change on Hover
             // $('.navbar a.event').removeClass("active");
             }
             });
             $("body").on('click', function() {
                 $(".jopsom-menu").removeClass('cart-visible');
             });
                // Sub Sub jobsom END////////////////////

                 // Sub Sub accommodation Menu////////////////////
             var quickLinks = $('.navbar .accommodation');
             quickLinks.on({
             mouseenter:function(){

            $('.navbar .menu .accommodation-menu').addClass('cart-visible');
             // // //Plus icon Change on Hover
             // // $('.navbar a.event').addClass("active");
             }
             });
             var quickLinks = $('.navbar span.accommodation-hidden');
             quickLinks.on({
             mouseleave:function(){
             $('.navbar .menu .accommodation-menu').removeClass('cart-visible');
             // //Plus icon Change on Hover
             // $('.navbar a.event').removeClass("active");
             }
             });
             $("body").on('click', function() {
                 $(".jopsom-menu").removeClass('cart-visible');
             });
                // Sub Sub accommodation END////////////////////
        ///MAIN NAVBAR JS END HERE
})
