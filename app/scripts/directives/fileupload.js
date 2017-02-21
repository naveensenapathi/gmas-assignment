'use strict';
angular.module('gmasAssignmentApp')
  .directive('uploadfile', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        element.bind('click', function(e) {
        	angular.element('#' + attr.uploadfile)[0].value = "";
            angular.element('#' + attr.uploadfile).trigger('click');
        });
      }
    };
});