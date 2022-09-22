$(document).ready(function(){
    // Navbar-menu-Active-Class Add
    $("ul.menu li.menu-item").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
/////////////////////////NAVBAR MENU ACTIVE JS END

        // toggle menu/navbar Scripts
        $('.menu-btn').click(function(){
            $('.navbar .menu ').toggleClass("active");
            $('.navbar i ').toggleClass("active");
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