angular.module('dreamCastApp')
.controller('prodCtrl', function($scope, $stateParams, prodService){

  var currentProdId = $stateParams.prodId;

  $scope.prod = prodService.getProd(currentProdId);

});
