angular.module('dreamCastApp')
.controller('prodsCtrl', function($scope, prodService){

  $scope.prods = prodService.getProds();

  $scope.createNewProd = function(newProd) {
    prodService.addProd(newProd);
    $scope.prods = prodService.getProds();
    $scope.toggleInput();
  };

  $scope.toggleInput = function(){
    $scope.formInput = !$scope.formInput;
  };

  $scope.deleteProd = function(prod) {

  };

});
