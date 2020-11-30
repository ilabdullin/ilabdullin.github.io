$(function() {

 /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#worksSlider");

    slider.slick({
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        infinite: true,
        dots:true
    });



});
