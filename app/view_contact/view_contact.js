'use strict';

angular
    .module('myApp.view_contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'view_contact/view_contact.html',
            controller: 'ViewContactController'
        });
    }])

    .controller('ViewContactController', [function() {

    }]);