angular.module('dreamCastApp')
.controller('prodCtrl', function($scope, $stateParams, prodService){

  var currentProdId = $stateParams.prodId;

  $scope.prod = prodService.getProd(currentProdId);

  $scope.createNewActor = function(actor) {
    prodService.addActor(actor, currentProdId);
    $scope.actors = prodService.getActors(currentProdId);
    $scope.toggleInput();
  };

  $scope.actors = prodService.getActors(currentProdId);

  $scope.toggleInput = function(){
    $scope.formInput = !$scope.formInput;
  };

  $scope.delete = function() {
    var actor = $scope.removedId;
    console.log(actor);
    prodService.deleteActor(currentProdId, actor);
    $scope.actors = prodService.getActors(currentProdId);
  };

});
