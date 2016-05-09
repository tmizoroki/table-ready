(function() {
  'use strict';
  
  angular
    .module('app.waitList')
    .directive('trPartyForm', trPartyForm);
  
  function trPartyForm() {
    return {
      templateUrl: 'app/waitList/directives/partyForm.html',
      restrict: 'E'
    };
  }
  
})();