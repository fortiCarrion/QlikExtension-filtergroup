// JavaScript
// funciona
define( [
    ],
    function (  ) {
        'use strict';

        return {
            definition: {},
            initialProperties: {},
            support: {snapshot: true},
            template: '<div qv-extension>This is my message: <b>{{msg}}</b></div>',
            controller: ['$scope', function ( $scope ) {
                $scope.msg = 'Hello AngularJS';
            }]
        };
    } );