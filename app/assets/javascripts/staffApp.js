var staffApp = angular.module('staffApp', ['ngResource', 'ngRoute', 'templates']);

staffApp.config(['$httpProvider', '$locationProvider', '$routeProvider', function($httpProvider, $locationProvider, $routeProvider) {
    // Add CSRF Token to all API request to accommodate Rails' built in CSRF protection
    var authToken = $("meta[name=\"csrf-token\"]").attr("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

    $routeProvider
        .when('/', {
            templateUrl: 'staff-app/staff.html',
            controller: 'StaffCtrl'
        });
}]);
