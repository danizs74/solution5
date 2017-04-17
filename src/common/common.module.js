(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://solution5rest.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
