'use strict';

/* App Module */

var ankApp = angular.module('ankApp', [
    'ngRoute',
    'ankAppControllers',
    'ankAppServices',
    'ankAppFilters',
    'ankAppDirectives',
    'ngAnimate'
]);

  ankApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller:'homePageCtrl'
      }).
     when('/about', {
        templateUrl: 'partials/about.html',
        controller:'aboutCtrl'
      }).
    when('/profile', {
        templateUrl: 'partials/profile.html',
        controller:'ProfileCtrl'
      }).
    when('/contact', {
        templateUrl: 'partials/contact_revenge.html',
        controller:'contactCtrl'
      }). 
    when('/revenge', {
        templateUrl: 'partials/contact.html',
        controller:'revengeCtrl'
      }). 
      otherwise({
        redirectTo: '/home'
      });
       
      
  }]);
