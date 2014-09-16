(function (angular){
  "use strict";

  angular.module('morph', [
    'morph.transitions', 
    'morph.assist',
    'morph.manager'
  ])
  .factory('Morph', ['Transitions', 'Assist', 'Manager', function (Transitions, Assist, Manager) {

    return function (transition, elements, settings) {
      var MorphableBoundingRect = settings.MorphableBoundingRect;

      // set wrapper bounding rectangle
      Assist.setBoundingRect(elements.wrapper, MorphableBoundingRect);
      
      // apply normal-state styles
      angular.forEach(elements, function (element, elementName) {
        Assist.applyDefaultStyles(element, elementName);
      });

      return Transitions[transition](elements, settings);
    };
  }])
  .factory('TemplateHandler', ['$http', '$templateCache', function ($http, $templateCache) {
    return {
      get: function (path) {
        return $http.get(path, { cache: $templateCache });
      }
    };
  }]);
})(angular);