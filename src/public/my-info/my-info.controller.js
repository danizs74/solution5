(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService','user'];
function MyInfoController(UserService, user) {
  var $ctrl = this;

  $ctrl.user = UserService.getUser();
  $ctrl.menuItem = UserService.getFavItem();
}

})();
