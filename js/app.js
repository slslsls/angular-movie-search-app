var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/:id', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    })
});
