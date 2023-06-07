$(document).ready(function() {

    // Yandex карта page contacts


    if($("#map").length) {

        function addYaMaps() {
            var myMap;
            ymaps.ready(init);

            function init() {
                myMap = new ymaps.Map('map', {
                    center: [55.781510, 37.930387],
                    zoom: 16,
                    controls: []
                }),
                    myPlacemark = new ymaps.Placemark([55.781510, 37.930387], {
                        // balloonContentHeader: '',
                        // balloonContentBody: "text",
                        // balloonContentFooter: "+7 (925) 603-78-22<br>+7 (926) 263-02-69<br>info@magixkalyan.ru",

                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'assets/images/map-marker.svg',
                        // iconImageSize: [30, 42],
                        iconImageOffset: [0, -45],
                        // balloonOffset: [-25, -5]
                    });
                myMap.geoObjects.add(myPlacemark);
                ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});
            }
        }

        addYaMaps();
    }

})

