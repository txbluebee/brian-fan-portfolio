import avator from '../media/avator.png';

function initMap() {
  let map;
  map = new google.maps.Map(document.querySelector('.location'), {
    center: {lat: 47.6183216, lng: -122.3505767},
    zoom: 12,
    styles:
    [
      {
       "stylers": [
           {
               "saturation": -100
           },
           {
               "gamma": 1
           }
       ]
     },
     {
         "elementType": "labels.text.stroke",
         "stylers": [
             {
                 "visibility": "off"
             }
         ]
     },
     {
         "featureType": "poi.business",
         "elementType": "labels.text",
         "stylers": [
             {
                 "visibility": "off"
             }
         ]
     },
     {
         "featureType": "poi.business",
         "elementType": "labels.icon",
         "stylers": [
             {
                 "visibility": "off"
             }
         ]
     },
     {
         "featureType": "poi.place_of_worship",
         "elementType": "labels.text",
         "stylers": [
             {
                 "visibility": "off"
             }
         ]
     },
     {
         "featureType": "poi.place_of_worship",
         "elementType": "labels.icon",
         "stylers": [
             {
                 "visibility": "off"
             }
         ]
     },
     {
         "featureType": "road",
         "elementType": "geometry",
         "stylers": [
             {
                 "visibility": "simplified"
             }
         ]
     },
     {
         "featureType": "water",
         "stylers": [
             {
                 "visibility": "on"
             },
             {
                 "saturation": 50
             },
             {
                 "gamma": 0
             },
             {
                 "hue": "#50a5d1"
             }
         ]
     },
     {
         "featureType": "administrative.neighborhood",
         "elementType": "labels.text.fill",
         "stylers": [
             {
                 "color": "#333333"
             }
         ]
     },
     {
         "featureType": "road.local",
         "elementType": "labels.text",
         "stylers": [
             {
                 "weight": 0.5
             },
             {
                 "color": "#333333"
             }
         ]
     },
     {
         "featureType": "transit.station",
         "elementType": "labels.icon",
         "stylers": [
             {
                 "gamma": 1
             },
             {
                 "saturation": 50
             }
         ]
     }
    ]
  });
  var marker = new google.maps.Marker({
    position: {lat: 47.6183216, lng: -122.3505767},
    map: map,
    title: 'My Location',
    icon: avator
  })
}

initMap();
