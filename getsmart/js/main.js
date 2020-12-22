$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let navToggle = $("#navToggle");
    let nav = $("#nav");




   /* Header Scroll
    ====================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });




    /* Smooth Scroll
    ====================*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;


        $("html, body").animate({
            scrollTop: elementOffset - 90
        }, 800);
    });



    /* Nav Toggle
   ====================*/
    navToggle.on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        nav.toggleClass("active");
    });

    /* Reviews: https://kenwheeler.github.io/slick/ */
//    let slider = $("#introSlider");
//
//    slider.slick({
//        autoplay: true,
//        autoplaySpeed: 5000,
//        infinite: true,
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        fade: true,
//        arrows: false,
//        dots: true
//    });



});
