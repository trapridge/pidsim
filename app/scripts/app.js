'use strict';

angular.module('pidsimApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'spaceribs.ngPaper'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
