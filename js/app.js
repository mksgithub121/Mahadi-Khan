$(function () {
    //  Smooth section scroll code start here  
    $(".header_section ul li a").on('click', function (e) {
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
    // slick slider for banner
    $('.banner_slider').slick({
        autoplay: true,
        arrows: false,
    });
    //sitebar
    $(".show_more_btn").on("click", function () {
        $(".all_wrapper").toggleClass("sidebar_hide_show");
    });
    // Know more icon
    $('.show_more_btn').click(function () {
        $("#nav-icon2").toggleClass('open');
    });
    // banner bg
    jQuery("#banner_section").YTPlayer({
        showControls: false,
    });
    // // page piling
    // $('#all_pagePiling').pagepiling({
    //     menu: null,
    //     direction: 'vertical',
    //     verticalCentered: true,
    //     scrollingSpeed: 700,
    //     easing: 'swing',
    //     loopBottom: false,
    //     loopTop: false,
    //     css3: true,
    //     normalScrollElements: null,
    //     normalScrollElementTouchThreshold: 5,
    //     touchSensitivity: 5,
    //     keyboardScrolling: true,
    //     sectionSelector: 'section',
    //     animateAnchor: false,

    //     //events
    //     onLeave: function (index, nextIndex, direction) {},
    //     afterLoad: function (anchorLink, index) {},
    //     afterRender: function () {},
    // });

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