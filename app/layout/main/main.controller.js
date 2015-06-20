(function() {
    'use strict';
    angular.module('webApp').controller('MainController', mainController);

    mainController.$inject = ['$scope'];
    function mainController($scope, ngMap) {
        $scope.showTablePrice1 = true;
        $scope.showTablePrice2 = true;



    }
})();




initializeGoogleMaps = function() {


    //gPositionAlbatros = new google.maps.LatLng(,),
}
//
//                // création de la route
//                gDirectionsDisplay = new google.maps.DirectionsRenderer();
//
//                // création de la fenetre
//                gInfoWindow = new google.maps.InfoWindow({
//                  content: '<div class="infoWindow" style="width: 200px;">'+
//                    ''+
//
//                });
//                gInfoWindow.open(gMap, gMarker);
//                google.maps.event.addListener(gMarker, 'click', function() {
//                    gInfoWindow.open(gMap,gMarker);
//                });
//                google.maps.event.addListener(gInfoWindow, 'domready', function() {
//                    $('#calcMapFoot').on('click', function() {
//                        calcMapRoute('foot');
//                    });
//                    $('#calcMapBicycle').on('click', function() {
//                        calcMapRoute('bicycle');
//                    });
//                    $('#calcMapCar').on('click', function() {
//                        calcMapRoute('car');
//                    });
//                });