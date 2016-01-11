angular.module('dreamCastApp')
.controller('regCtrl', function($scope, userService){

  $scope.register = function(newEmail, newPassword){
    userService.register(newEmail, newPassword);
  };

});
