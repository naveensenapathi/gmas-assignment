'use strict';
angular.module('gmasAssignmentApp')
  .directive('resizable', function () {
    var resizableConfig = {};

    return {
        restrict: 'A',
        scope: {
            callback: '&onResize'
        },
        link: function postLink(scope, elem) {
            elem.resizable(resizableConfig);
            elem.on('resizestop', function () {
                if (scope.callback) scope.callback();
            });
        }
    };
});