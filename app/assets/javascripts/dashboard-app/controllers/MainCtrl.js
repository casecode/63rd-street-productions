dashboard.controller('MainCtrl', ['deviseAuth', function(deviseAuth) {
    var _this = this;

    _this.loggedIn = false;
    _this.userCreds = {}

    _this.login = function() {
        deviseAuth.login(_this.userCreds).then(function(user) {
            _this.loggedIn = true;
            console.log(user)
        }, function(error) {
            console.log(error);
        });
    };

    _this.logout = function() {
        deviseAuth.logout().then(function(message) {
            _this.loggedIn = false;
            alert(message);
        }, function(error) {
            console.log(error);
        });
    };
}]);
