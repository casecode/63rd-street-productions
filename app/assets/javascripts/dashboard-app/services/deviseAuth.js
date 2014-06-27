dashboard.factory('deviseAuth', [
    '$http',
    '$q',
    '$cookieStore',
    function($http, $q, $cookieStore) {
        var service = {};

        // Set login and logout paths relative to Rails root
        var loginPath = '/dashboard/login';
        var logoutPath = '/dashboard/logout';

        service.login = function(creds) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: loginPath,
                data: { user: creds }
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function(error) {
                deferred.reject(error);
            })
            return deferred.promise;
        };

        return service;
    }
]);
