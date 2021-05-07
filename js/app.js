$(function () {
    // counter about
    $('.about_counter').counterUp({
        delay: 10,
        time: 2000
    });
    // menu active
    // slick slider for Body
    $(".section_wrapper").slick({
        arrows: true,
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
        centerPadding: "0px",
        prevArrow: '.about_icon_top',
        nextArrow: '.about_icon_bottom',
        asNavFor: "#slider_menu",

    });
    $("#slider_menu").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: ".section_wrapper",
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        centerMode: false,
        centerPadding: '0px',
        focusOnSelect: true,

    });

    // slick slider for Skills
    $(".skills_contents").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        touchMove: false,
        asNavFor: ".skills_menu",
    });
    $(".skills_menu").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".skills_contents",
        dots: false,
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
    });
    $(".skills_nav ul li").on("click", function () {
                $(".skills_nav ul li").removeClass("slick-white");
    });
    // slick slider for banner
    $('.banner_slider').slick({
        autoplay: true,
        arrows: false,
    });
    //sitebar
    $(".show_more_btn").on("click", function () {
        $(".all_wrapper").toggleClass("sidebar_hide_show");
    });
    $(".header_section ul li").on("click", function () {
        $(".all_wrapper").removeClass("sidebar_hide_show");
        $("#nav-icon2").removeClass('open');
    });
    // Know more icon
    $('.show_more_btn').click(function () {
        $("#nav-icon2").toggleClass('open');
    });
    // banner bg
    jQuery("#banner_section").YTPlayer({
        showControls: false,
    });

    /*     // preloader code start here
        $(window).on("load", function () {
            $(".preloader").addClass("complete");
        });
        // preloader code end here 

        //   scroll animation aos plugin code start here
        AOS.init();
        //  scroll animation aos plugin code end here  

        // Sticky menu js code start here 

        //  scroll down to hide navbar  and scroll top to show navbar

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > 50 && prevScrollpos > currentScrollPos) {
                $(".header_section").addClass("sticky");
            } else {
                $(".header_section").removeClass("sticky");
            }
            prevScrollpos = currentScrollPos;
        }


        //  scroll down to show navbar 


        $(window).on("scroll", function () {
            var scrollAmount = $(window).scrollTop();
            if (scrollAmount > 200) {
                $(".header_section").addClass("sticky");
            } else {
                $(".header_section").removeClass("sticky");
            }
        });

        // Sticky menu js code end here
        // Back To Top button start here

        $(window).on("scroll", function () {
            var scrollAmount = $(window).scrollTop();
            if (scrollAmount > 200) {
                $(".backToTop").slideDown();

            } else {
                $(".backToTop").slideUp();
            }
        });
        $(".backToTop i").on("click", function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1500);
        });
        // Back To Top button end here

        //  Smooth section scroll code start here  
        $(".header_section .menu ul li a").on('click', function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 1000, 'swing', function () {
                // window.location.hash = target;
            });
        });
        //  Smooth section scroll code end here
       */

});