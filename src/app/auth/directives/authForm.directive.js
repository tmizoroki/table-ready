(function() {
  'use strict'
  
  angular
    .module('app.auth')
    .directive('tmAuthForm', tmAuthForm);
  
  function tmAuthForm() {
    return {
      templateUrl: 'app/auth/directives/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        error: '=',
        formTitle: '@',
        submitAction: '&'
      }
    };
  }
  
  function AuthFormController() {
    var vm = this;
    
    vm.user = {
      email: "",
      password: ""
    };
  }
})();