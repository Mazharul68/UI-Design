$(document).ready(function(){
    ///QUICK LINKS JS START HERE
    var quickLinks = $('.right-side .hidden-link .top-links');
    quickLinks.on({
         mouseenter:function(){
         $('.right-side .top-dropdown').addClass('cart-visible');
         }
         });
         var quickLinks = $('.right-side span');
         quickLinks.on({
         mouseleave:function(){
         $('.right-side .top-dropdown').removeClass('cart-visible');
             }
         });
        $("body").on('click', function() {
            $(".top-right .top-dropdown").removeClass('cart-visible');
        });
    ///QUICK LINKS JS END HERE
   // Owl Coursel Js
   $('#slider-owl-carousel').owlCarousel({
       loop: true,
       nav: false,
       dots:true,
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
    $('#slider-owl-carousel1').owlCarousel({
        loop: true,
        nav: false,
        dots:true,
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
    // Owl Coursel Js End
    /////////////////////////NAVBAR MENU ACTIVE JS START
    // Navbar-menu-Active-Class Add
        $("ul li").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    /////////////////////////NAVBAR MENU ACTIVE JS END
    ///MAIN NAVBAR JS START HERE
    var quickLinks = $('.navbar .event');
    quickLinks.on({
         mouseenter:function(){
         $('.navbar-dropdown').addClass('cart-visible');
         //Plus icon Change on Hover
         $('.navbar a.event').addClass("active");
         }
         });
         var quickLinks = $('.navbar .d-menu');
         quickLinks.on({
         mouseleave:function(){
         $('.navbar-dropdown').removeClass('cart-visible');
         //Plus icon Change on Hover
         $('.navbar a.event').removeClass("active");
         }
         });
        $("body").on('click', function() {
            $(".navbar-dropdown").removeClass('cart-visible');
        });
    ///MAIN NAVBAR JS END HERE

        //toggle menu/navbar Scripts
        $('.menu-btn').click(function(){
            $('.navbar .menu ').toggleClass("active");
            $('.navbar i ').toggleClass("active");
        });



        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
       
});


