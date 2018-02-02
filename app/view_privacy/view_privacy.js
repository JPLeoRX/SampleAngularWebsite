'use strict';

angular
    .module('myApp.view_privacy', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/privacy', {
            templateUrl: 'view_privacy/view_privacy.html',
            controller: 'ViewPrivacyController'
        });
    }])

    .controller('ViewPrivacyController', [function() {

    }]);