dashboard.controller('AuthCtrl', [
    'deviseAuth',
    '$cookieStore',
    function(deviseAuth, $cookieStore) {
        var _this = this;

        _this.cookieAuthComplete = false;
        _this.loggedIn = false;
        _this.userCreds = {};

        // On page load, attempt to login user from cookie
        var cookieCreds = $cookieStore.get('userCreds');
        if (cookieCreds) {
            deviseAuth.isAuthenticated().then(function(user) {
                _this.loggedIn = true;
                _this.cookieAuthComplete = true;
            }, function(error) {
                _this.cookieAuthComplete = true;
            });
        } else {
            _this.cookieAuthComplete = true;
        }

        _this.login = function() {
            deviseAuth.login(_this.userCreds).then(function(user) {
                _this.loggedIn = true;
            }, function(error) {
                console.log(error);
            });
        };

        _this.logout = function() {
            deviseAuth.logout().then(function(message) {
                _this.loggedIn = false;
                _this.userCreds = {};
                alert(message);
            }, function(error) {
                console.log(error);
            });
        };
    }
]);
