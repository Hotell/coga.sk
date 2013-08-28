'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/vydavatelia', {
                templateUrl: 'partials/vydavatelia.html',
                controller: 'PublishersCtrl'
            });
        $routeProvider
            .when('/kontakt', {
                templateUrl: 'partials/kontakt.html',
                controller: 'ContactCtrl'
            });
        $routeProvider
            .otherwise({
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl',
                redirectTo: ''
            });
    }]);

angular.module('myApp')
    .run([
        '$rootScope', '$location', '$anchorScroll', '$routeParams',
        function ($rootScope, $location, $anchorScroll, $routeParams) {
            $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
                console.log($location.path());
//                console.log(newRoute);
                console.log($routeParams);
//                $location.hash($routeParams.scrollTo);
//                $anchorScroll();
            });
        }
    ]);
