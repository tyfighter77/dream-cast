angular.module('dreamCastApp')
.controller('prodsCtrl', function($scope, prodService, $stateParams){

  $scope.uid = $stateParams.uid;

  $scope.createNewProd = function(newProd) {
    newProd.uid = $scope.uid;
    prodService.addProd(newProd);
    $scope.getProds();
    $scope.toggleInput();
  };

  $scope.toggleInput = function(){
    $scope.formInput = !$scope.formInput;
  };

  $scope.delete = function() {
    var prod = $scope.removedId;
    prodService.deleteProd(prod);
    $scope.getProds();
  };

  $scope.getProds = function() {
    prodService.getProds($scope.uid)
    .then(function(response){
      $scope.prods = response;
    });
  };

  $scope.getProds();

});
