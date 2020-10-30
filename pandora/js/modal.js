$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let navToggle = $("#navToggle");
    let nav = $("#nav");




    checkScroll(scrollPos, introH);


    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });


    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        }    else {
            header.removeClass("fixed");
        }
    }




    /* Smooth Scroll
    ====================*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;


        $("html, body").animate({
            scrollTop: elementOffset + 40
        }, 500);
    });



     /* Modal
    ====================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');


        $(modalId).addClass('show');
        $("body").addClass('no-scroll');


        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
            });
        }, 200);

        worksSlider.slick('setPosition');
    });



    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');


        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });


        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });



   $(".modal").on("click", function(event) {
       let $this = $(this);

       $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });


        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });



    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });



});







