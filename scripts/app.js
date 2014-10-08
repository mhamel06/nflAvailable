angular.module('nfl', ['firebase']).controller('nflCtrl', function($scope, $firebase){
var ref = new Firebase("https://nflrank.firebaseio.com");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.data = sync.$asObject();


});
