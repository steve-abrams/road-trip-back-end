// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
// = require react
// = require react_ujs
// = require components
//= require_tree .
//= require foundation

$(function(){ $(document).foundation(); });

var map;
function initMap() {
  var startLat = $('#startLat').html()
  var startLng = $('#startLng').html()
  var endLat = $('#endLat').html()
  var endLng = $('#endLng').html()

  console.log(endLat, startLat,endLng, startLng, typeof endLat);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: parseInt(startLat), lng: parseInt(startLng)},
    scrollwheel: false,
    zoom: 7
  });

  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 40.85, lng: -85.65},
    title: 'Hello World!'
  });
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: {lat: Number(startLat), lng: Number(startLng)},
    origin: {lat: Number(endLat), lng: Number(endLng)},
    travelMode: google.maps.TravelMode.DRIVING
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });

}
