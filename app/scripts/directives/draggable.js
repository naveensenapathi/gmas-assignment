'use strict';
angular.module('gmasAssignmentApp')
    .directive('draggable', function() {
        var draggableConfig = {};
        return {
            restrict: 'A',
            link: function postLink(scope, elem) {
                elem.draggable(draggableConfig.containment = elem.parent());
            }
        };
    });
