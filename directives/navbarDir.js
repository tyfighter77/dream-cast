angular.module('dreamCastApp')
.directive('navbarDir', function(){
  return {
    restrict: 'E',
    templateUrl: './views/navbarTmpl.html',
    controller: function($scope, userService, fb, $firebaseAuth, $stateParams){
      var authRef = $firebaseAuth(new Firebase (fb.url));
      $scope.loggedIn = false;

      $scope.logout = function(){
        userService.logout();
      };

      authRef.$onAuth(function(authData){
        if (!authData){
          $scope.loggedIn = false;
        } else {
          $scope.loggedIn = true;
          $scope.uid = authData.uid;
        }
      });
    }
  };
});
