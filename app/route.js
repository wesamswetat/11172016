/**
 * Created by Wesam on 11/16/2016.
 */

(function () {
    'use strict';

    var route = angular.module('devSense');

    route.config(routeFunction);
    
    function routeFunction($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'homeController'
            })
            .when('/picture/:label', {
                templateUrl: 'app/views/picture.html',
                controller: 'pictureController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
