(function() {
    'use strict';

    angular.module('webApp').config(configProviders);

    configProviders.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configProviders($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                views: {
                    "navigation": {templateUrl: "/app/navigation/navigation.html"},

                    "club-plage.cover": {templateUrl: "/app/club-plage/club-plage.cover.html"},
                    "club-plage": {templateUrl: "/app/club-plage/club-plage.html"},

                    "ecole-natation.cover": {templateUrl: "/app/ecole-natation/ecole-natation.cover.html"},
                    "ecole-natation": {templateUrl: "/app/ecole-natation/ecole-natation.html"},

                    "remise-forme.cover": {templateUrl: "/app/remise-forme/remise-forme.cover.html"},
                    "remise-forme": {templateUrl: "/app/remise-forme/remise-forme.html"},

                    "stand-up-paddle.cover": {templateUrl: "/app/stand-up-paddle/stand-up-paddle.cover.html"},
                    "stand-up-paddle": {templateUrl: "/app/stand-up-paddle/stand-up-paddle.html"},

                    "equipe": {templateUrl: "/app/equipe/equipe.html"},

                    "contact": {templateUrl: "/app/contact/contact.html"},

                    "partenaire": {templateUrl: "/app/partenaire/partenaire.html"}
                }
            });
    }
})();
