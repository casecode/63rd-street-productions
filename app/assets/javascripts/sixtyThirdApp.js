var app = angular.module('sixtyThirdApp', [
    'ngResource',
    'ngRoute',
    'templates'
]);

app.config([
    '$httpProvider',
    '$routeProvider',
    function($httpProvider, $routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
    }
]);
