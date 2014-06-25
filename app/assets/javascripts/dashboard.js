//= require angular-devise/lib/devise-min.js
//= require_self
//= require_tree ./dashboard-app

var dashboard = angular.module('dashboardApp', [
    'ngResource',
    'ngRoute',
    'templates',
    'Devise'
]);

dashboard.config([
    '$httpProvider',
    'AuthProvider',
    '$routeProvider',
    function($httpProvider, AuthProvider, $routeProvider) {

        // Add CSRF Token to all API requests for compatibility with Rails CSRF protection
        var authToken = $("meta[name=\"csrf-token\"]").attr("content");
        $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

        // Configure AngularDevise AuthProvider
        AuthProvider.loginPath('/dashboard/login.json')
        AuthProvider.logoutPath('/dashboard/logout.json')

        // Configure routes relative to Rails dashboard_path,
        // i.e. Angular root is at '/dashboard#/'
        $routeProvider
            .when('/', {
                templateUrl: 'dashboard/dashboard-home.html',
                controller: 'HomeCtrl'
            });
    }
]);
