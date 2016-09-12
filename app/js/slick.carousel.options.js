jQuery(document).ready(function($) {
    $(".slick-slider").slick({
        asNavFor: '.slider-top',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        vertical: true,
        arrows: false
});
    $(".slider-top").slick({
        asNavFor: '.slick-slider',
        nextArrow:"<img class='slider-top-prev' src='img/icons/slider-top-prev.png'>",
        prevArrow:"<img class='slider-top-next' src='img/icons/slider-top-next.png'>"
    });
});