jQuery(document).ready(function($) {
    var base = '';
    if(typeof vars !== 'undefined' && vars.template !== null){
        base = vars.template
    }
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
        nextArrow:"<img class='slider-top-prev' src='"+base+"img/icons/slider-top-next.png'>",
        prevArrow:"<img class='slider-top-next' src='"+base+"img/icons/slider-top-prev.png'>",
        verticalSwiping: true

    });

    $(".product-slider-top").slick({
        nextArrow:"<img class='slider-top-prev' src='"+base+"img/icons/slider-top-next.png'>",
        prevArrow:"<img class='slider-top-next' src='"+base+"img/icons/slider-top-prev.png'>",
        slidesToShow: 3,
        slidesToScroll: 1

    });
});