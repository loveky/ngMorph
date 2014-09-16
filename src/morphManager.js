(function (angular){
  "use strict";

  angular.module('morph.manager', [])
  .factory('Manager', ['$window', function ($window) {
    var stack = [];

    angular.element($window).on("keydown", function(e) {
      console.log(e);
    });

    return {
      push: function(element) {
        stack.push(element);
      },
    };
  }]);
})(angular);