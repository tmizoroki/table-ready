(function() {
  'use strict';
  
  angular
    .module('app.layout')
    .directive('trNavbar', trNavbar);
  
  function trNavbar() {
    return {
      templateUrl: 'app/layout/navbar.html',
      restrict: 'E'
    }
  }
  
})();
