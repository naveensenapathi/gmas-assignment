'use strict';
angular.module('gmasAssignmentApp')
    .directive('selectfile', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var onChangeHandler = scope.$eval(attrs.selectfile);
                element.bind('change', onChangeHandler);
            }
        };
    });
