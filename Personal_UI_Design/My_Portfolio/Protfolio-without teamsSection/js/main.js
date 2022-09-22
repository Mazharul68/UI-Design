$(document).ready(function(){

    $(window).scroll(function(){

       if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
       }else{
        $('.navbar').removeClass("sticky");
       }

       // Scroll bar Scripts
       if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show"); 
       }else{
        $('.scroll-up-btn').removeClass("show");   
       }
    });

    $(window).scroll(function(){    
        // Slide-up Script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
        });
   
     });
//    // Slide-up Script
//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//     });

    //toggle menu/navbar Scripts
    $('.menu-btn').click(function(){
        
        $('.navbar .menu ').toggleClass("active");
        $('.navbar i ').toggleClass("active");
    });

    //Typing Scripts
      var typed = new Typed(".tying", {
        strings: ["Web Developer","Freelancer" ,"Business website using laravel", "PHP Laravel website" ],
        typeSpeed: 200,
        backSpeed:60,
        loop:true
      });
      var typed = new Typed(".tying1", {
        strings: ["WEB DEVELOPER", "BUSINESS WEBSITE DEVELOPER", "ECOMMERCE DEVELOPER", "PHP LARAVEL WEBSITE DEVELOPER" ],
        typeSpeed: 200,
        backSpeed:60,
        loop:true
      });

    // Owl Carorusel Script

    $('.carousel').owlCarousel({
        margin : 20,
        loop : true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
});