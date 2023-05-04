$(document).ready(function() {
    // Navbar-menu-Active-Class Add
    // $(".list-product-nav li.nav_list_item").click(function() {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
    $('.list-product-nav .list-product-cat').click(function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.list-product-nav .list-product-subnav').slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
        e.stopPropagation();
    
        var span = $(this).find('span.fas');
        span.toggleClass('active');
      }); 
      
      
     ///Dark white Toggle
     let darkBtn = document.getElementById("dark-btn");

    darkBtn.onclick = function(){
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");


        if(localStorage.getItem("theme") == "light"){
            localStorage.setItem("theme", "dark");
        }else{
            localStorage.setItem("theme", "light");
        }
    }
    if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

    }else if(localStorage.getItem("theme") == "dark"){
        darkBtn.classList.add("dark-btn-on");
        document.body.classList.add("dark-theme");
    }else{
        localStorage.setItem("theme", "light");

    }
    // $("li.nav_list_item").click(function(){
    //     alert('fdsf');
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
});
// -------multilevel-accordian-menu---------
$(document).ready(function() {
    $("#accordian a").click(function() {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;

        closest_ul.find("ul").slideUp(function() {
            if (++count == closest_ul.find("ul").length){
                parallel_active_links.removeClass("active");
                parallel_active_links.children("ul").removeClass("show-dropdown");
            }
        });

        if (!link_status) {
            closest_li.children("ul").slideDown().addClass("show-dropdown");
            closest_li.parent().parent("li.active").find('ul').find("li.active").removeClass("active");
            link.parent().addClass("active");
        }
    })
});

// --------for-active-class-on-other-page-----------
jQuery(document).ready(function($){
  	// Get current path and find target link
  	var path = window.location.pathname.split("/").pop();
  
  	// Account for home page with empty path
  	if ( path == '' ) {
    	path = 'index.html';
  	}
     
  	var target = $('#accordian li a[href="'+path+'"]');
  	// Add active class to target link
  	target.parents("li").addClass('active');
  	target.parents("ul").addClass("show-dropdown");
});

