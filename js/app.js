angular.module('dreamCastApp', ['ui.router', 'firebase'])
.constant('fb', {
  url: 'https://dream-cast.firebaseio.com/'
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: './views/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/loginTmpl.html',
      controller: 'loginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/regTmpl.html',
      controller: 'regCtrl'
    })
    .state('productions', {
      url: '/productions',
      templateUrl: './views/prodsTmpl.html',
      controller: 'prodsCtrl'
    })
    .state('production', {
      url: '/productions/:prodId',
      templateUrl: './views/prodTmpl.html',
      controller: 'prodCtrl'
    });
  $urlRouterProvider.otherwise('/home');
});
