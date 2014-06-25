//= require_self
//= require_tree ./sixty-third-app

var app = angular.module('sixtyThirdApp', [
    'ngResource',
    'ngRoute',
    'templates'
]);

app.config([
    '$httpProvider',
    '$routeProvider',
    function($httpProvider, $routeProvider) {

        // Add CSRF Token to all API request to accommodate Rails' built in CSRF protection
        var authToken = $("meta[name=\"csrf-token\"]").attr("content");
        $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

        $routeProvider
            .when('/', {
                templateUrl: 'sixty-third/home.html',
                controller: 'HomeCtrl'
            });
    }
]);
