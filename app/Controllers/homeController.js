/**
 * Created by Wesam on 11/16/2016.
 */

(function () {
    'use strict';

    var homePage = angular.module('devSense');

    homePage.controller('homeController', homePageControllerFunction);

    function homePageControllerFunction($scope, $http) {
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

            for (var i = 0; i < $scope.nodes.length; i = i + 1) {
                var TopLeft = {};
                if (i < 5) {
                    TopLeft = {
                        'background': '#d3d3d3',
                        'left': 100 * Math.cos(90 / ($scope.nodes.length - 1) * i * (Math.PI / 90)) + 'px',
                        'top': 100 * Math.sin(90 / ($scope.nodes.length - 1) * i * (Math.PI / 90)) + 'px'
                    };
                } else if (i >= 5) {
                    TopLeft = {
                        'background': '#d3d3d3',
                        'left': 150 * Math.cos(60 / ($scope.nodes.length - 1) * (i - 5) * (Math.PI / 90)) + 'px',
                        'top': 150 * Math.sin(60 / ($scope.nodes.length - 1) * (i -5) * (Math.PI / 90)) + 'px'
                    };
                }
                if ($scope.nodes[i].type === 1){
                    TopLeft.background = '#ADD8E6';
                }
                $scope.arrayOfStyle.push(TopLeft);
            }
            console.log($scope.nodes);
        }

        function errorCallBack(response, status) {
            console.log('error',response.status);
            if (response.status === 599){
                alert('an error that occurs from time to time (representing a network connection error)')
            }
            if (response.status === 401){
                alert('token is incorrect')
            }
            if (response.status === 404){
                alert('path is not found')
            }
            if (response.status === 404){
                alert('unknown error')
            }
        }

        $scope.childrenClicked = function(item){
            console.log(item);
        }
    }

})();
