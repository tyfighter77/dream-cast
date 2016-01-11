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

});
