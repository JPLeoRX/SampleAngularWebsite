'use strict';

angular
    .module('myApp.view_about', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'view_about/view_about.html',
            controller: 'ViewAboutController'
        });
    }])

    .controller('ViewAboutController', [function() {

    }]);