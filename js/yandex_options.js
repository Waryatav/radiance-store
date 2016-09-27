jQuery(document).ready(function($) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.763918, 37.606388],
                zoom: 9,
                controls: []
            }, {
                searchControlProvider: 'none'
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'img/icons/marker.png',
                balloonContent: 'marker'
            }, {

            });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    });
});