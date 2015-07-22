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
                    "navigation": {templateUrl: "/dist/app/navigation/navigation.html"},

                    "club-plage.cover": {templateUrl: "/dist/app/club-plage/club-plage.cover.html"},
                    "club-plage": {templateUrl: "/dist/app/club-plage/club-plage.html"},

                    "ecole-natation.cover": {templateUrl: "/dist/app/ecole-natation/ecole-natation.cover.html"},
                    "ecole-natation": {templateUrl: "/dist/app/ecole-natation/ecole-natation.html"},

                    "remise-forme.cover": {templateUrl: "/dist/app/remise-forme/remise-forme.cover.html"},
                    "remise-forme": {templateUrl: "/dist/app/remise-forme/remise-forme.html"},

                    "stand-up-paddle.cover": {templateUrl: "/dist/app/stand-up-paddle/stand-up-paddle.cover.html"},
                    "stand-up-paddle": {templateUrl: "/dist/app/stand-up-paddle/stand-up-paddle.html"},

                    "equipe": {templateUrl: "/dist/app/equipe/equipe.html"},

                    "contact": {templateUrl: "/dist/app/contact/contact.html"},

                    "partenaire": {templateUrl: "/dist/app/partenaire/partenaire.html"}
                }
            });
    }
})();
