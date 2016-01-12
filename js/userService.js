angular.module('dreamCastApp')
.service('userService', function($firebaseAuth, $state, fb){

  var authRef = $firebaseAuth(new Firebase (fb.url));
  var usersRef = $firebaseAuth(new Firebase(fb.url + '/users'));
  var self = this;

  this.getUser = function() {
    console.log(authRef.$getAuth());
    return authRef.$getAuth();
  };

  this.register = function(email, password) {
    authRef.$createUser({
      email: email,
      password: password
    })
    .then(function(newUser){
      self.login(email, password);
      $state.go('productions');
    }, function(error){
      alert('Registration Failed! Try Again');
      console.log(error);
    });
  };

  this.login = function(email, password) {
    authRef.$authWithPassword({
      email: email,
      password: password
    })
    .then(function(authData){
      console.log(authData);
      $state.go('productions', {uid:authData.uid});
    }, function(error){
      alert('Login Failed! Try Again');
      console.log(error);
    });
  };

  this.logout = function(){
    return authRef.$unauth();
  };

  authRef.$onAuth(function(authData){
    if (!authData){
      $state.go('home');
    }
  });

});
