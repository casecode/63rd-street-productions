var app = angular.module('sixtyThirdApp', ['ngResource', 'ngRoute', 'templates']);

app.config(['$httpProvider', '$locationProvider', '$routeProvider', function($httpProvider, $locationProvider, $routeProvider) {
    // Add CSRF Token to all API request to accommodate Rails' built in CSRF protection
    var authToken = $("meta[name=\"csrf-token\"]").attr("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

    // Remove hash prefix from angular routes using html5Mode
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        });
}]);
