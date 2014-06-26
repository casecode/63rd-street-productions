//= require angular-cookies/angular-cookies.min
//= require_self
//= require_tree ./dashboard-app

var dashboard = angular.module('dashboardApp', [
    'ngResource',
    'ngRoute',
    'ngCookies',
    'templates',
    'Devise',
    'ng-rails-csrf'
]);

dashboard.config([
    '$httpProvider',
    'AuthProvider',
    '$routeProvider',
    function($httpProvider, AuthProvider, $routeProvider) {

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
