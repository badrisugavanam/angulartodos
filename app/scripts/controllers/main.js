'use strict';

/**
 * @ngdoc function
 * @name angulartodosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulartodosApp
 */
var mctril=angular.module('angulartodosApp');

  mctril.controller('MainCtrl',['$scope','$location', function ($scope,$location) {
   
    $scope.submit = function(){
    	$location.path('/login');
    	$scope.hideLogin=true;
    	
    };
  }]);
