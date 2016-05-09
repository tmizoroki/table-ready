(function() {
  'use strict';
  
  angular
    .module('app.layout')
    .directive('trNavbar', trNavbar);
  
  function trNavbar() {
    return {
      templateUrl: 'app/layout/navbar.html',
      restrict: 'E',
      controller: NavBarController,
      controllerAs: 'vm'
    }
  }
  
  NavBarController.$inject = ['$location', 'authService'];
  
  function NavBarController($location, authService) {
    var vm = this;
    
    vm.isLoggedIn = authService.isLoggedIn;
    vm.logout = logout;
    
    function logout() {
      authService.logout();
      $location.path('/');
    }
  }
  
})();
