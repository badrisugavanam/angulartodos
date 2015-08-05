'use strict';

/**
 * @ngdoc overview
 * @name angulartodosApp
 * @description
 * # angulartodosApp
 *
 * Main module of the application.
 */
angular
  .module('angulartodosApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/home.html',
        controller: 'login',
        controllerAs: 'login'
      });
      // .otherwise({
      //   redirectTo: '/',
      //   controller:'login'
      // });
  });
