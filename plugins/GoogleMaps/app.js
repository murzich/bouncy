;(function(){
// 
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var startPoint;
var endPoint;
var travelType;
//
var styleMap = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 47.825, lng: 35.170},
	zoom: 14,
  styles: styleMap,
  unitSystem: google.maps.UnitSystem.METRIC,
});

var markerBeetroot = new google.maps.Marker({
  position: {lat: 47.816150, lng: 35.170192},
  map: map, // or use marker.setMap(map)
  title: 'Beetroot',
  label: 'B',
  animation: google.maps.Animation.BOUNCE,
});

var markerSecond = new google.maps.Marker({
  position: {lat: 47.823098, lng: 35.168197},
  map: map,
  title: 'Aurora',
  label: 'A',
  animation: google.maps.Animation.DROP,
});


getNewDirection();

directionsDisplay.setMap(map);

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault();
  getNewDirection();
  displayRoute();
});

function displayRoute() {
directionsService.route({
  origin: startPoint,
  destination: endPoint,
  // waypoints: waypts,
  // optimizeWaypoints: true,
  travelMode: travelType,
}, function(response, status) {
  if (status === 'OK') {
    directionsDisplay.setDirections(response);
    // var route = response.routes[0];
    // var summaryPanel = document.getElementById('directions-panel');
    // summaryPanel.innerHTML = '';
    // For each route, display summary information.
    // for (var i = 0; i < route.legs.length; i++) {
      // var routeSegment = i + 1;
      // summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
          // '</b><br>';
      // summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
      // summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
      // summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
    // }
  } else {
    window.alert('Directions request failed due to ' + status);
  }
})
}

function getNewDirection() {
  startPoint = document.getElementById('start').value;
  endPoint   = document.getElementById('end').value;
  travelType = document.getElementById('type').value
}


//DirectionsRequest
// {
//   origin: 'Запорожье', //LatLng | String | google.maps.Place,
//   destination: 'Полтава', //LatLng | String | google.maps.Place,
//   travelMode: 'DRIVING', //TravelMode,
//   transitOptions: //TransitOptions,
//   drivingOptions: //DrivingOptions,
//   unitSystem: google.maps.UnitSystem.METRIC, //UnitSystem,
//   waypoints[]: //DirectionsWaypoint,
//   optimizeWaypoints: true, //Boolean,
//   provideRouteAlternatives: false, //Boolean,
//   avoidHighways: //Boolean,
//   avoidTolls: //Boolean,
//   region: 'UA', //String
// }

})();