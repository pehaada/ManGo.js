var myApp = angular.module('myApp', ['ui.router']);
// public/js/appRoutes.js

myApp.run(function() {

});


myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('user', {
            url: "/user",
            templateUrl: "views/user.html"
        })
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html"
        })

});