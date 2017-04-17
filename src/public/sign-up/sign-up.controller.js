(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController)
.directive('itemExists', ['MenuService', '$filter', function(MenuService, $filter) {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
            function itemValidation(value) {
                MenuService.getMenuItem($filter('uppercase')(value)).then(function(){
                	ctrl.$setValidity('validItem', true);
                }).catch(function(){
                	ctrl.$setValidity('validItem',  false);
                })

                return value;
            }
            ctrl.$parsers.push(itemValidation);
        }
    };
}]);

SignUpController.$inject = ['UserService','MenuService','$filter'];
function SignUpController(UserService, MenuService, $filter) {
  var $ctrl = this;
  $ctrl.signUpSuccess = false;
  $ctrl.user = {};
  $ctrl.saved = false;
  $ctrl.favItem = {};
  $ctrl.favItemShortName = '';
  $ctrl.found = false;

  $ctrl.submit = function () {
  	$ctrl.saved = true;

   	var promise = MenuService.getMenuItem( $filter('uppercase')($ctrl.favItemShortName) );

  	  promise.then(function (response) {

      	$ctrl.searchInvalid = false;

      	UserService.setFavItem(response);
      	UserService.setUser($ctrl.user);

      	$ctrl.signUpSuccess = true;
      	return true;
     })
     .catch(function (error) {
     	$ctrl.searchInvalid = true;

       	return false;
     });
  }

}


})();
