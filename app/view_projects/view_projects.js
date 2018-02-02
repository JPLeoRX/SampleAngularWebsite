'use strict';

angular
    .module('myApp.view_projects', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'view_projects/view_projects.html',
            controller: 'ViewPrivacyController'
        });
    }])

    .controller('ViewProjectsController', [function() {

    }]);