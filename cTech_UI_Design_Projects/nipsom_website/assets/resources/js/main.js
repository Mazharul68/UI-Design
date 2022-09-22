$(document).ready(function(){
    // Navbar-menu-Active-Class Add
    $("ul.menu li.menu-item").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(".dept-single-part2 a").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
/////////////////////////NAVBAR MENU ACTIVE JS END

        // toggle menu/navbar Scripts
        $('.menu-btn').click(function(){
            $('.navbar .menu ').toggleClass("active");
            $('.navbar i ').toggleClass("active");
        });

        // Departments Scripts
        $('.dept-dropdown').click(function(){
            $('.dept-dropdown ').toggleClass("active");
            $('.dept-dropdown a ').toggleClass("active");
        });

        // Departments Scripts
        $('.dept-dropdown1').click(function(){
            $('.dept-dropdown1 ').toggleClass("active");
            $('.dept-dropdown1 a ').toggleClass("active");
        });
        // Departments Scripts
        $('.dept-dropdown2').click(function(){
            $('.dept-dropdown2 ').toggleClass("active");
            $('.dept-dropdown2 a ').toggleClass("active");
        });
        // Departments Scripts
        $('.dept-dropdown3').click(function(){
            $('.dept-dropdown3 ').toggleClass("active");
            $('.dept-dropdown3 a ').toggleClass("active");
        });

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
                /************Department details Faculty owl carousel******/
                $(document).ready(function(){
                    $(".owl-carousel").owlCarousel({
                    autoplay : false,
                    loop : false,
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
                
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");

        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));

  // Scrolling Js End
}


const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function blurFunc (){
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}
inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});
})