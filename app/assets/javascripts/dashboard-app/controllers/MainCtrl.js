dashboard.controller('MainCtrl', ['deviseAuth', function(deviseAuth) {
    var main = this;

    var creds = {
        email: 'casey.r.white@gmail.com',
        password: 'password'
    }

    deviseAuth.login(creds)
        .then(function(user) {
            console.log(user);
        }, function(error) {
            console.log(error);
        });
}]);
