/**
 * Created by Wesam on 11/16/2016.
 */

(function () {
    'use strict';

    var homePage = angular.module('devSense');

    homePage.controller('homeController', homePageControllerFunction);

    function homePageControllerFunction($scope, $http, $location, mainService) {
        $scope.arrayOfStyle = [];
        $scope.showNodes = function () {
            $http({
                method: 'GET',
                url: 'http://dvns.me/yaniv/clientest/public/explorePictures',
                headers: {
                    'X-TOKEN': '2d4e69f4823176197ccf41caa5ee6456'
                },
                params: {
                    path: 'root'
                }
            })
                .then(successCallBack, errorCallBack);
        };

        function successCallBack(response) {

            $scope.nodes = response.data.data.children;

            // I failed to get the pictures from the API
            // I generate 10 images like DATA structure example in the PDF
            for (var z = 0; z < 10; z = z + 1) {
                var x = {
                    label: "picture" + z,
                    type: 1,
                    url: "http://placehold.it/350?text=picture" + z
                };

                $scope.nodes.splice( Math.floor((Math.random() * 10) + 1) , 0, x);

            }


            var
                topLeft = {},
                r = 100, temp = 0;  // radius;

            for (var i = 0; i < $scope.nodes.length; i = i + 1) {

                console.log(i, temp, i - temp);
                if ((35 * (i - temp)) > (2 * Math.PI * r / 4)) {
                    r = r + 50;
                    temp = i;
                }

                topLeft = {
                    'background': '#d3d3d3',
                    'left': Math.cos(35 * (i - temp) / r) * r + 'px',
                    'top': Math.sin(35 * (i - temp) / r) * r + 'px'

                };

                if ($scope.nodes[i].type === 1) {
                    topLeft.background = '#ADD8E6';
                }
                $scope.arrayOfStyle.push(topLeft);

            }

            mainService.setDataFromApi($scope.nodes);
        }

        function errorCallBack(response) {
            if (response.status === 599) {
                alert('an error that occurs from time to time (representing a network connection error)')
            }
            if (response.status === 401) {
                alert('token is incorrect')
            }
            if (response.status === 404) {
                alert('path is not found')
            }
            if (response.status === 404) {
                alert('unknown error')
            }
        }

        $scope.childrenClicked = function (item) {

            if (item.hasOwnProperty('url') && item.type === 1) {
                $location.path('/picture/' + item.label);
            }
        }
    }

})();
