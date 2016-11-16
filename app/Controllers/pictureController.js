/**
 * Created by Wesam on 11/16/2016.
 */

(function () {
    'use strict';

    var picturePage = angular.module('devSense');

    picturePage.controller('pictureController', pictureControllerFunction);

    function pictureControllerFunction($scope, $http) {
        $scope.xxx = 'picturePage';
    }

})();
