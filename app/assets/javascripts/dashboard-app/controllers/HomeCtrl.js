dashboard.controller('HomeCtrl', function($http) {
    var _this = this;

    this.test = "Testing DASHBOARD HOME";

    this.user = {}

    this.sign_up = function() {

        console.log(_this.user);
        $http({
            method: 'post',
            url: '/api/users',
            data: {'user': _this.user}
        }).success(function(data) {
            alert("Sign Up Successful");
            console.log(data);
        }).error(function(data) {
            alert("Sign Up Failed");
            console.log(data);
        });
    };
});
