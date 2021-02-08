$(function() {
    $('.content.owl-carousel.owl-theme').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        stagePadding: 50,
        dots: false,
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.last.owl-carousel.owl-theme ').owlCarousel({
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 1500,
        loop: true,
        smartSpeed: 487,

    });
    $('.latest .owl-carousel').owlCarousel({


        loop: true,
        margin: 10,
        nav: true,
        items: 1,

    });
    $('.toggle').click(function() {
        $('.slide-bar').addClass('open')
    });
    $('.close-search').click(function() {
        $('.slide-bar').removeClass('open')
    });
    $('#search').click(function() {

        $('form').addClass('open');
        $('.closed').addClass('open')


    });
    $('.close-button').click(function() {
        $('form').removeClass('open');
        $('.closed').removeClass('open');
    });
    $('.link-one').click(function() {

        $('ul#one').toggleClass('open');
        $('span.one-plus').toggleClass('open');

    });
    $('.link-two').click(function() {

        $('ul#two').toggleClass('open');
        $('span.two-plus').toggleClass('open');
    });
});