ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("yandex-map", {
        center: [55.74312, 37.683792],
        zoom: 16,
        controls: []
    });
 	
 	myMap.behaviors.disable('scrollZoom');

 	myMap.controls.add("zoomControl", {
 		position: {top:25, left: 25}
 	});

 	var myPlacemark1 = new ymaps.Placemark([55.74312, 37.683792] , {},
 		 { iconLayout: 'default#image',
          iconImageHref: 'img/icons/map-marker.svg',
          iconImageSize: [50, 65],
          iconImageOffset: [-20, -67] });

 	var myPlacemark2 = new ymaps.Placemark([55.747036, 37.678138] , {},
 		 { iconLayout: 'default#image',
          iconImageHref: 'img/icons/map-marker.svg',
          iconImageSize: [50, 65],
          iconImageOffset: [-20, -67] });

 	var myPlacemark3 = new ymaps.Placemark([55.740596, 37.685541] , {},
 		 { iconLayout: 'default#image',
          iconImageHref: 'img/icons/map-marker.svg',
          iconImageSize: [50, 65],
          iconImageOffset: [-20, -67] });

	var myPlacemark4 = new ymaps.Placemark([55.744881, 37.67567] , {},
 		 { iconLayout: 'default#image',
          iconImageHref: 'img/icons/map-marker.svg',
          iconImageSize: [50, 65],
          iconImageOffset: [-20, -67] }); 	
 
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);

}