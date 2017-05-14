if (document.getElementById('map')) {
	//console.log('Map exist');
	$(function () {})
	var styles = [
		{
			"elementType": "geometry.fill"
			, "stylers": [
				{
					"color": "#ffffff"
      }
    ]
  }
		, {
			"elementType": "geometry.stroke"
			, "stylers": [
				{
					"weight": 1
      }
    ]
  }
		, {
			"elementType": "labels.text"
			, "stylers": [
				{
					"color": "#040701"
      }
				, {
					"weight": 0.5
      }
    ]
  }
		, {
			"elementType": "labels.text.stroke"
			, "stylers": [
				{
					"visibility": "off"
      }
    ]
  }
		, {
			"featureType": "landscape"
			, "elementType": "geometry"
			, "stylers": [
				{
					"color": "#ebebeb"
      }
    ]
  }
		, {
			"featureType": "poi"
			, "stylers": [
				{
					"color": "#f3f3f3"
      }
    ]
  }
		, {
			"featureType": "poi.park"
			, "elementType": "geometry"
			, "stylers": [
				{
					"color": "#f0f0f0"
      }
    ]
  }
		, {
			"featureType": "poi.park"
			, "elementType": "labels.text"
			, "stylers": [
				{
					"color": "#ffffff"
      }
    ]
  }
		, {
			"featureType": "poi.park"
			, "elementType": "labels.text.stroke"
			, "stylers": [
				{
					"color": "#000000"
      }
    ]
  }
		, {
			"featureType": "road"
			, "elementType": "geometry"
			, "stylers": [
				{
					"color": "#65bd26"
      }
    ]
  }
		, {
			"featureType": "transit"
			, "elementType": "geometry"
			, "stylers": [
				{
					"color": "#f0f0f0"
      }
    ]
  }
		, {
			"featureType": "water"
			, "elementType": "geometry"
			, "stylers": [
				{
					"color": "#ffffff"
      }
    ]
  }
];
	var markers = [];

	function initMap() {
		var myOptions = {
			zoom: 12
			, center: new google.maps.LatLng(53.90794316841072, 27.538187408447232)
//			, disableDefaultUI: true
			, scrollwheel: false
			, mapTypeControl: false
			, streetViewControl: false
//			, navigationControl: true
			, zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL
				, position: google.maps.ControlPosition.LEFT_TOP
			}
			, mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
			}
		};
		var map = new google.maps.Map(document.getElementById('map'), myOptions);
		var mapType = new google.maps.StyledMapType(styles, {
			name: "Grayscale"
		});
		map.mapTypes.set('tehgrayz', mapType);
		map.setMapTypeId('tehgrayz');
		setMarkers(map);
	}
	var beaches = [];
	$('.maps').each(function (index) {
		var cur_coords = [];
		cur_coords[0] = $(this).data('longitude');
		cur_coords[1] = $(this).data('latitude');
		beaches[index] = cur_coords;
	});
	var contentString = beaches[1];

	function setMarkers(map) {
		var image = {
			url: '../../img/icons/marker.png'
			, size: new google.maps.Size(24, 35)
			, origin: new google.maps.Point(0, 0)
			, anchor: new google.maps.Point(12, 35)
		};
		var markersBounds = new google.maps.LatLngBounds();
		for (var i = 0; i < beaches.length; i++) {
			var beach = beaches[i];
			var markerPosition = new google.maps.LatLng(beach[0], beach[1]);
			var marker = new google.maps.Marker({
				position: markerPosition
				, map: map
				, icon: image
			});
		}
	};
	initMap();
}