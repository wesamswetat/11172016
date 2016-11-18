/**
 * Created by Wesam on 11/16/2016.
 */

(function () {
    'use strict';

    var picturePage = angular.module('devSense');

    picturePage.controller('pictureController', pictureControllerFunction);

    function pictureControllerFunction($scope, $http, $routeParams, $location, mainService) {


        var i, isImgNotFound = true;


        $scope.label = $routeParams.label;
        $scope.data = mainService.getDataFromApi();

        if (angular.isArray($scope.data)) {
            for (i = 0; i < $scope.data.length; i = i + 1) {
                if ($scope.data[i].label === $scope.label) {
                    $scope.mainImgSrc = $scope.data[i].url;
                    isImgNotFound = false;
                }
            }
            if (isImgNotFound)
                $location.path('/');
        } else {
            $location.path('/');
        }

        $scope.showImg = function (img) {
            $scope.mainImgSrc = img.url;
            $scope.label = img.label;
        }

    }

})();
