'use strict';

/**
 * @ngdoc function
 * @name gmasAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gmasAssignmentApp
 */
angular.module('gmasAssignmentApp')
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.customImage = null;
        $scope.selectFile = function(event) {
            $scope.$apply(function() {
                $scope.customImage = URL.createObjectURL(event.target.files[0]);
            })
        }
    }]);
