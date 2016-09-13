jQuery(document).ready(function($) {
    $(".slick-slider").slick({
        asNavFor: '.slider-top',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        vertical: true,
        arrows: false,
        verticalSwiping: true
});
    $(".slider-top").slick({
        asNavFor: '.slick-slider',
        nextArrow:"<img class='slider-top-prev' src='img/icons/slider-top-next.png'>",
        prevArrow:"<img class='slider-top-next' src='img/icons/slider-top-prev.png'>",
        verticalSwiping: true

    });
});