(function() {
    'use strict';
    angular.module('webApp').controller('MainController', mainController);

    mainController.$inject = ['$scope'];
    function mainController($scope, ngMap) {
        $scope.showTablePrice1 = true;
        $scope.showTablePrice2 = true;
    }
})();

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

//var gMap,
//    gMarker,
//    gDirectionsDisplay,
//    gInfoWindow,
//    gDirectionsService = new google.maps.DirectionsService(),
//    gPositionAlbatros = new google.maps.LatLng(47.47954,-3.12005),
//    contentError= '<div class="infoWindow" style="width: 200px;">'+
//        '<h4 class="text-center">Nous rejoindre</h4>'+
//        '<p class="text-center">'+
//        'Nous sommes dans l\'incapacité de trouver votre position'+
//        '</p></div>';
