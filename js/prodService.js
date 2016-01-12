angular.module('dreamCastApp')
.service('prodService', function(fb, $firebaseArray, $firebaseObject){

  this.addProd = function(newProd) {
    var ref = new Firebase(fb.url + 'prods');
    return $firebaseArray(ref).$add(newProd);
  };

  this.getProds = function(){
    var ref = new Firebase(fb.url + 'prods');
    return $firebaseArray(ref);
  };

  this.getProd = function(prodId) {
    var ref = new Firebase(fb.url + 'prods/' + prodId);
    return $firebaseObject(ref);
  };

  this.addActor = function(newActor, prodId) {
    var ref = new Firebase(fb.url + 'prods/' + prodId + '/actors');
    return $firebaseArray(ref).$add(newActor);
  };

  this.getActors = function(prodId){
    var ref = new Firebase(fb.url + 'prods/' + prodId + '/actors');
    return $firebaseArray(ref);
  };

  this.deleteProd = function(prodId) {
    var ref = new Firebase(fb.url + 'prods/' + prodId);
    return ref.remove();
  };

  this.deleteActor = function(prodId, actorId) {
    var ref = new Firebase(fb.url + 'prods/' + prodId + '/actors/' + actorId);
    return ref.remove();
  };

});
