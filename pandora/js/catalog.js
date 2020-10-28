$(function() {

 /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#introSlider");

    slider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });



});
