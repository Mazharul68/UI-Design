// Navbar-menu-Active-Class Add
$(".navbar-nav li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  