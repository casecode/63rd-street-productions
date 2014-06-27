dashboard.factory('deviseAuth', [
    '$http',
    '$q',
    '$cookieStore',
    function($http, $q, $cookieStore) {
        var service = {};

        // Set login and logout paths relative to Rails root
        var loginPath = '/dashboard/login.json';
        var logoutPath = '/dashboard/logout.json';

        // Set currentUser if authentication successful
        var currentUser;

        service.login = function(creds) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: loginPath,
                data: { user: creds }
            }).success(function(user) {
                currentUser = user;
                deferred.resolve(user);
            }).error(function(error) {
                deferred.reject(error);
            })
            return deferred.promise;
        };

        service.logout = function() {
            var deferred = $q.defer();
            $http({
                method: 'DELETE',
                url: logoutPath
            }).success(function() {
                deferred.resolve("You are now signed out.");
            }).error(function(error) {
                deferred.reject(error);
            })
            return deferred.promise;
        }

        return service;
    }
]);
