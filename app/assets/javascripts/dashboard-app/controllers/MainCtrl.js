dashboard.controller('MainCtrl', ['Auth', function(Auth) {
    var main = this;

    // var isLoggedIn = Auth.isAuthenticated();
    // if (isLoggedIn) { main.currentUser = getCurrentUser(); }
    //
    var getCurrentUser = function() {
        Auth.currentUser().then(function(user) {
            console.log(user);
        }, function(error) {
            // Auth.currentUser() only called if user authenticated,
            // thus no error should arise, but return null as fail-safe.
            console.log("ERROR!!!");
        });
    };

    var login = function() {
        var credentials = {
            email: 'casey.r.white@gmail.com',
            password: 'password'
        };

        Auth.login(credentials).then(function(user) {
            console.log(user);
            // getCurrentUser();
        }, function(error) {
            // Authentication failed
            console.log(error);
        });
    };

    login();
    setTimeout(function()
        { getCurrentUser(); }
    , 3000);
    setTimeout(function()
        { console.log(Auth.isAuthenticated()); }
    , 3000);

    // console.log(isLoggedIn);
    // Auth.currentUser().then(function(user) {
    //     // User was logged in, or Devise returned
    //     // previously authenticated session.
    //     console.log(user); // => {id: 1, ect: '...'}
    // }, function(error) {
    //     // unauthenticated error
    //     console.log(error);
    // });
}]);
