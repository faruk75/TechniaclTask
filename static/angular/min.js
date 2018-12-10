var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('input_data',{
            url : '/input_data',
            templateUrl : 'static/views/input_data.html',
            controller : 'myControllerOne',
        })
        .state('show_data',{
            url : '/show_data',
            templateUrl : 'static/views/show_data.html',
            controller : 'myControllerTwo'
        })
        .state('show_data.delete',{
            url : '/show_data',
            templateUrl : 'static/views/show_data.html',
            controller : 'myControllerTwo'
        });
    $urlRouterProvider.otherwise('/');
});
