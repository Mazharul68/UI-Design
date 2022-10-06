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
    // $('.navigation ul.navi_items li.nav_item').on('click',function() {
    //     $(this).addClass('active').siblings().removeClass('active');   
    // });
    // $('.nav_item').on('click',function() {
    //     $('.dropdown_menu').toggleClass("active");
    //         $('.plusFlex i').toggleClass("active");
    
    //     // if ($(this).hasClass("active")){
    //     //     $('.dropdown_menu').toggleClass("active");
    //     //     $(this).addClass("active");
    //     //     $('.plusFlex i').toggleClass("active");
    //     // }else{
    //     //     $('.dropdown_menu').toggleClass("active");
    //     //     $('.plusFlex i').toggleClass("active");
    //     //     $(this).removeClass("active");
    //     // }
       
    // });


    menuDropdowns = function(){
        $('.nav_item').each(function(){
            const links = $(this).find('.dropdown_menu');
            const plus = $(this).find('.plusFlex i');
            const h = links.height();
            
             links.css('height', '0');
            
             $(this).click(function(){
                if ($(this).toggleClass('js-opened').hasClass('js-opened')) {
                    links.css('height', h);
                    plus.toggleClass('active');
                } else {
                    links.css('height', 0);
                    plus.toggleClass('active');
                };
                
            });
        });
     };
});
$( document ).ready(function() {
    menuDropdowns();
    dateTime();

});