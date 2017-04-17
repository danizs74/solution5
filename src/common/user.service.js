(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;

  service.setFavItem = function(favItem) {
    service.favItem = favItem;
  };

  service.setUser = function(user) {
    service.user = user;
  };

  service.setFavItemShortName = function(shortName){
    service.setFavItemShortName = shortName;
  }

  service.getUser = function() {
    return service.user;
  };

  service.getFavItem = function() {
    return service.favItem;
  }

  service.getFavItemShortName = function(){
    return service.favItemShortName;
  }
}

})();
