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
        var currentUser = null;

        var loginHttpConfig = function(data) {
            return {
                method: 'post',
                url: loginPath,
                data: { user: data }
            }
        }

        service.login = function(creds) {
            var deferred = $q.defer();
            $http(loginHttpConfig(creds)).success(function(user) {
                // On successfull login, set currentUser and store userCreds in cookie
                currentUser = user;
                $cookieStore.put('userCreds', creds);
                deferred.resolve(user);
            }).error(function(error) {
                deferred.reject(error);
            })
            return deferred.promise;
        };

        service.isAuthenticated = function() {
            var deferred = $q.defer();
            var creds = $cookieStore.get('userCreds');
            $http(loginHttpConfig(creds)).success(function(user) {
                // update currentUser if authenticated
                currentUser = user;
                deferred.resolve(true);
            }).error(function(error) {
                $cookieStore.remove('userCreds');
                deferred.reject(false);
            })
            return deferred.promise;
        };

        service.logout = function() {
            var deferred = $q.defer();
            $http({
                method: 'delete',
                url: logoutPath
            }).success(function() {
                // On successful logout, clear currentUser and userCreds from cookie
                currentUser = null;
                $cookieStore.remove('userCreds');
                deferred.resolve("You are now signed out.");
            }).error(function(error) {
                deferred.reject(error);
            })
            return deferred.promise;
        };

        service.currentUser = function() {
            return currentUser;
        };

        return service;
    }
]);
