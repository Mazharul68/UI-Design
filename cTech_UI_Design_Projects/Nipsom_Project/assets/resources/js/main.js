$(document).ready(function(){
    // Navbar-menu-Active-Class Add
    $("ul li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
/////////////////////////NAVBAR MENU ACTIVE JS END

        //toggle menu/navbar Scripts
        $('.menu-btn').click(function(){
            $('.navbar .menus ').toggleClass("active");
            $('.navbar i ').toggleClass("active");
        });

        ///MAIN NAVBAR JS START HERE
        // HOME dropdown menus Start
        var homeHover = $('.navbar .home');
        homeHover.on({
            mouseenter:function(){
            $('.navbar .menus .home-dropdown').addClass('home-active');
            //Plus icon Change on Hover
                 $('.navbar a.home').addClass("active");
            }
            });
            var homeHover = $('.navbar .home-menu');
            homeHover.on({
            mouseleave:function(){
            $('.navbar .menus .home-dropdown').removeClass('home-active');
            //Plus icon Change on Hover
            $('.navbar a.home').removeClass("active");
            }
            });
            // Home Dropdown Menus End

            // Academic dropdown menus Start
        var homeAcademic = $('.navbar .academic');
        homeAcademic.on({
            mouseenter:function(){
            $('.navbar .menus .academic-dropdown').addClass('academic-active');
            //Plus icon Change on Hover
            $('.navbar a.academic').addClass("active");
            }
            });
            var homeAcademic = $('.navbar .academic-mene');
            homeAcademic.on({
            mouseleave:function(){
            $('.navbar .menus .academic-dropdown').removeClass('academic-active');
            //Plus icon Change on Hover
            $('.navbar a.academic').removeClass("active");
            }
            });
            // Academic Dropdown Menus End

            // Pulication dropdown menus Start
        var homeAcademic = $('.navbar .publication');
        homeAcademic.on({
            mouseenter:function(){
            $('.navbar .menus .publication-dropdown').addClass('publication-active');
            //Plus icon Change on Hover
            $('.navbar a.publication').addClass("active");
            }
            });
            var homeAcademic = $('.navbar .publication-menu');
            homeAcademic.on({
            mouseleave:function(){
            $('.navbar .menus .publication-dropdown').removeClass('publication-active');
            //Plus icon Change on Hover
            $('.navbar a.publication').removeClass("active");
            }
            });
            // Academic Dropdown Menus End

            // Activities dropdown menus Start
        var ActivitiesHover = $('.navbar .activities');
        ActivitiesHover.on({
            mouseenter:function(){
            $('.navbar .menus .activities-dropdown').addClass('activities-active');
             //Plus icon Change on Hover
             $('.navbar a.activities').addClass("active");
            }
            });
            var ActivitiesHover = $('.navbar .activities-menu');
            ActivitiesHover.on({
            mouseleave:function(){
            $('.navbar .menus .activities-dropdown').removeClass('activities-active');
             //Plus icon Change on Hover
             $('.navbar a.activities').removeClass("active");
            }
            });
            // Academic Dropdown Menus End

            // Facilities dropdown menus Start
        var facilitiesHover = $('.navbar .facilities');
        facilitiesHover.on({
            mouseenter:function(){
            $('.navbar .menus .facilities-dropdown').addClass('facilities-active');
              //Plus icon Change on Hover
              $('.navbar a.facilities').addClass("active");
            }
            });
            var facilitiesHover = $('.navbar .facilities-menu');
            facilitiesHover.on({
            mouseleave:function(){
            $('.navbar .menus .facilities-dropdown').removeClass('facilities-active');
             //Plus icon Change on Hover
             $('.navbar a.facilities').removeClass("active");
            }
            });
            // Facilities Dropdown Menus End

                //////////////////////////////////////////////SUB MANU START HERE////////////////////////////////

            // About dropdown menus Start
        var aboutHover = $('.navbar .about');
        aboutHover.on({
            mouseenter:function(){
            $('.navbar .menus .about-sub-dropdown').addClass('about-active');
            }
            });
            var aboutHover = $('.navbar .about-sub-menu');
            aboutHover.on({
            mouseleave:function(){
            $('.navbar .menus .about-sub-dropdown').removeClass('about-active');
            }
            });
            // About Dropdown Menus End

            // department dropdown menus Start
        var departmentHover = $('.navbar .department');
        departmentHover.on({
            mouseenter:function(){
            $('.navbar .menus .department-sub-dropdown').addClass('department-active');
            }
            });
            var departmentHover = $('.navbar .department-sub-menu span');
            departmentHover.on({
            mouseleave:function(){
            $('.navbar .menus .department-sub-dropdown').removeClass('department-active');
            }
            });
            // department Dropdown Menus End

            //Jopsom dropdown menus Start
            var jopsomHover = $('.navbar .jopsom');
            jopsomHover.on({
                mouseenter:function(){
                $('.navbar .menus .jopsom-sub-dropdown').addClass('jopsom-active');
                }
                });
                var jopsomHover = $('.navbar .jopsom-sub-menu span');
                jopsomHover.on({
                mouseleave:function(){
                $('.navbar .menus .jopsom-sub-dropdown').removeClass('jopsom-active');
                }
                });
                // Jopsom Dropdown Menus End

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

                // Owl Coursel Js
                $('#slider-owl-carousel2').owlCarousel({
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
                // Scrolling Js Start
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");

        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));

  // Scrolling Js End
}
})