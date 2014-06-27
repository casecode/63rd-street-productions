//= require angular-cookies/angular-cookies.min
//= require_self
//= require_tree ./dashboard-app

var dashboard = angular.module('dashboardApp', [
    'ngResource',
    'ngRoute',
    'ngCookies',
    'templates'
]);

dashboard.config([
    '$routeProvider',
    function($routeProvider) {
        // Configure routes relative to Rails dashboard_path,
        // i.e. Angular root is at '/dashboard#/'
        $routeProvider
            .when('/', {
                templateUrl: 'dashboard/dashboard-home.html',
                controller: 'HomeCtrl'
            });
    }
]);
