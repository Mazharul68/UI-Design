$(document).ready(function(){

/************owl carousel******/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay : true,
    loop : true,
    autoplayTimeout : 2000,
    smartSpeed :300,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
  });
});
/********Scroll-bar-Down-smothly*************/

$('.navbar-nav a[href^="#"]').click(function(e){
  e.preventDefault();

  var target = this.hash;

  $('html, body').animate({
    scrollTop: $(target).offset().top -75
  },3000);
});

// Navbar-menu-Active-Class Add
$(".navbar-nav li").click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});


/***********Scsroll-bar---Up****/
$(".top").click(function(){
  $("html, body").animate({
    scrollTop:0
  },1000);

});

$('.top').hide();

$(window).scroll(function(){
  var ourWindow = $(window).scrollTop();

  if(ourWindow<500){
    $('.top').fadeOut(2000);
  } else {
    $('.top').fadeIn(2000);
  }

  /***Navbar-fixed-Start Here***/

  if(ourWindow>100){
    $('body').addClass('fixed');
  } else {
    $('body').removeClass('fixed');
  }
});

});
