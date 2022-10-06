$(document).ready(function() {
    // Navbar-menu-Active-Class Add
    $(".main_menu > li").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // toggle menu/navbar Scripts
    $('.menu-btn').click(function() {

        $('.main_menu').toggleClass("active");
        $('.menu_section i').toggleClass("active");
    });

});