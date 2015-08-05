'use strict';

/**
 * @ngdoc function
 * @name angulartodosApp.controller:login
 * @description
 * # login
 * Controller of the angulartodosApp
 */
var login1=angular.module('angulartodosApp');

  login1.controller('login', function () {
    
    var Login=this;
    
    Login.login = function(){
         Login.login.status='logged';
      
    };

  });
