'use strict';

var app = angular.module("msjf", ["ngRoute"]);

//set up route paramaters
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: "HomeCtrl"
    }).when('/home', {
        templateUrl: 'partials/home.html',
        controller: "HomeCtrl"
    }).when('/membership', {
        templateUrl: 'partials/membership.html',
        controller: "MembershipCtrl"
    }).otherwise('/', {});
});

//initialize Firebase
app.run(($location, FBCreds) => {
    let creds = FBCreds;
let authConfig = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain,
    databaseURL: creds.databaseURL,
    projectId: creds.projectId,
    storageBucket: creds.storageBucket,
    messagingSenderId: creds.messagingSenderId
};

firebase.initializeApp(authConfig);
});

$(".dropdown-button").dropdown();
