$(document).ready(function(){
    // Navbar-menu-Active-Class Add
    $("ul.menu li.menu-item").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /********Scroll-bar-Down-smothly*************/

            $('#menus a[href^="#"]').click(function(e){
                e.preventDefault();
                var target = this.hash;
                $('html, body').animate({
                scrollTop: $(target).offset().top -75
                },3000);
            });

            /***********Scsroll-bar---Up****/
            $(".top-Scroll").click(function(){
                $("html, body").animate({
                scrollTop:0
                },1000);

            });

            $('.top-Scroll').hide();

            $(window).scroll(function(){
                var ourWindow = $(window).scrollTop();

                if(ourWindow<500){
                $('.top-Scroll').fadeOut(2000);
                } else {
                $('.top-Scroll').fadeIn(2000);
                }

                /***Navbar-fixed-Start Here***/
                if(ourWindow>0){
                $('body').addClass('fixed');
                } else {
                $('body').removeClass('fixed');
                }
            });

        //toggle menu/navbar Scripts
        $('.menu-btn').click(function(){
            $('.nav-menu .menu ').toggleClass("active");
            $('.nav-menu i ').toggleClass("active");
        });
})
