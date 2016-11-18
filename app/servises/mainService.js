/**
 * Created by Wesam on 11/17/2016.
 */

(function () {
    'use strict';

    var mainService = angular.module('devSense');

    mainService.factory('mainService', mainServiceFunction);

    function mainServiceFunction() {
        var mainServiceObj = {};

        var dataFromApi = {};

        mainServiceObj.setDataFromApi = function (data) {
            dataFromApi = data;
        };

        mainServiceObj.getDataFromApi = function () {
            return dataFromApi;
        };

        return mainServiceObj;
    }

})();
