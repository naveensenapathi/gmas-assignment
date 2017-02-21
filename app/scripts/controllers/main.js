'use strict';

/**
 * @ngdoc function
 * @name gmasAssignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gmasAssignmentApp
 */
angular.module('gmasAssignmentApp')
    .controller('MainCtrl', ['$scope', '$sce', function($scope, $sce) {
        $scope.customImage = null;
        $scope.croppedImage = null;
        $scope.frameImage = null;
        $scope.isImageCropped = false;
        $scope.selectImage = function(event) {
            $scope.$apply(function() {
                $scope.customImage = URL.createObjectURL(event.target.files[0]);
                $scope.resetDimensions();
            })
        };
        $scope.selectFrame = function(event) {
            // $scope.frameImage = URL.createObjectURL(event.target.files[0]);
            var fileReader = new FileReader();
            fileReader.readAsDataURL(event.target.files[0]);
            fileReader.onload = function(event) {
                $scope.$apply(function() {
                    $scope.frameImage = event.target.result;
                });
            };
        };
        $scope.clearImage = function(image) {
            $scope[image] = null;
        };
        $scope.resetDimensions = function() {
            angular.element(".cropped-image").css('width', 'auto');
            angular.element(".cropped-image").css('height', 'auto');
            angular.element("div.ui-wrapper").css('width', 'auto');
            angular.element("div.ui-wrapper").css('height', 'auto');
        }
        $scope.downloadFrame = function() {
            $scope.hideFrameExtras();
            html2canvas(angular.element(".frame-container")[0], {
                onrendered: function(canvas) {
                    // canvas is the final rendered <canvas> element
                    var ctx = canvas.getContext("2d");
                    // draw to canvas...
                    canvas.toBlob(function(blob) {
                        saveAs(blob, "Image Frame.png");
                        $scope.showFrameExtras();
                    });
                }
            });
        };
        $scope.hideFrameExtras = function() {
            angular.element(".cropped-image-drag-icon").hide();
            angular.element(".cropped-image-resize-icon").hide();
            angular.element(".clear-btn").hide();
            angular.element(".frame").addClass('frame-extras');
        };
        $scope.showFrameExtras = function() {
            angular.element(".cropped-image-drag-icon").show();
            angular.element(".cropped-image-resize-icon").show();
            angular.element(".clear-btn").show();
            angular.element(".frame").removeClass('frame-extras');
        };
    }]);
