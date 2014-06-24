//= require_self
//= require_tree ./public-app

var publicApp = angular.module('publicApp', ['ngResource', 'ngRoute', 'templates']);

publicApp.config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
    // Add CSRF Token to all API request to accommodate Rails' built in CSRF protection
    var authToken = $("meta[name=\"csrf-token\"]").attr("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

    $routeProvider
        .when('/', {
            templateUrl: 'public/home.html',
            controller: 'HomeCtrl'
        });
}]);
