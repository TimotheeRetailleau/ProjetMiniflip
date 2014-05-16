'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/mozaic', {templateUrl: 'partials/mozaic.html', controller: 'TwitterCtrl'});
  $routeProvider.when('/tweet', {templateUrl: 'partials/tweet.html', controller='TwitterCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
