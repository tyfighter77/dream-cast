angular.module('dreamCastApp', ['ui-router', 'firebase'])
.constat('fb', {
  url: 'https://dream-cast.firebaseio.com/'
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('Home',{
      url: '/home',
      templateUrl: '/views/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('Login', {
      url: '/login',
      templateUrl: '/views/loginTmpl.html',
      controller: 'loginCtrl'
    })
    .state('Register', {
      url: '/register',
      templateUrl: '/views/regTmpl.html',
      controller: 'regCtrl'
    })
    .state('Productions', {
      url: '/productions',
      templateUrl: '/views/prodsTmpl.html',
      controller: 'prodsCtrl'
    })
    .state('Production', {
      url: '/productions/:prodId',
      templateUrl: '/views/prodTmpl.html',
      controller: 'prodCtrl'
    });
  $urlRouterProvider.otherwise('/home');
});
