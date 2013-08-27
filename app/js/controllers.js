'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainCtrl', [
        '$scope', '$location',
        function($scope, $location) {

            $scope.menuActive = function(url, exactMatch) {
                if (exactMatch) {
                    return $location.path() === url;
                }
                else {
                    return $location.path().indexOf(url) == 0;
                }

            }

            $scope.isRouteActive = function(page) {
//                var regExp = new RegExp("^" + url + "$");
//                console.log($location.path());
//                console.log($location.path().match(regExp));
//                return $location.path().match(regExp);
//                console.log($location.path().substring(1));
                return page === $location.path().substring(1);
            }

        }
    ])
    .controller('HomeCtrl', [ '$scope', '$location',
        function($scope, $location) {

            $scope.go = function ( path ) {
                $location.path( path );
            };

        }
    ])
    .controller('PublishersCtrl', [ '$scope',
        function($scope) {

            $scope.publishersList = [
                {
                    name: 'IGI Global',
                    url: 'http://igi-global.com'
                },
                {
                    name: 'Cengage',
                    url: 'http://www.cengage.com/'
                },
                {
                    name: 'Cambridge University Press',
                    url: 'http://cambridge.com'
                },
                {
                    name: 'Oxford University Press',
                    url: 'http://ukcatalogue.oup.com/'
                },
                {
                    name: 'Springer',
                    url: 'http://www.springer.com/'
                },
                {
                    name: 'Pearson Education',
                    url: 'http://www.pearson.com/'
                }
            ]

        }
    ])
    .controller('ContactCtrl', [
        function() {

        }
    ]);