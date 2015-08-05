'use strict';

/**
 * @ngdoc function
 * @name angulartodosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulartodosApp
 */
var about=angular.module('angulartodosApp');
  about.controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
