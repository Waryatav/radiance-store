jQuery(document).ready(function($) {

    $('.slider-top_').owlCarousel({
        loop:true,
        nav:true,
         items:1,
        navText : ["<img src='img/icons/slider-top-prev.png'>","<img src='img/icons/slider-top-next.png'>"]
    });

    $('.slider-bot').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay: false,
        navText : ["<img src='img/icons/slider-bot-prev.png'>","<img src='img/icons/slider-bot-next.png'>"]
    });

    $('.catalogue-carousel').owlCarousel({
        loop: true,
        items: 6,
        nav: true,
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
    });

});