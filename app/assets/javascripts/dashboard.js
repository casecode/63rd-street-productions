//= require angular-devise/lib/devise-min.js
//= require_self
//= require_tree ./dashboard-app

var dashboard = angular.module('dashboardApp', ['ngResource', 'ngRoute', 'templates']);

dashboard.config(['$httpProvider', '$locationProvider', '$routeProvider', function($httpProvider, $locationProvider, $routeProvider) {
    // Add CSRF Token to all API request to accommodate Rails' built in CSRF protection
    var authToken = $("meta[name=\"csrf-token\"]").attr("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

    $routeProvider
        .when('/', {
            templateUrl: 'dashboard/dashboard-home.html',
            controller: 'HomeCtrl'
        });
}]);
