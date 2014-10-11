(function(){

  'use strict';

  angular.module('myApp.beer', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/beers', {
      templateUrl: 'beer/beer.html',
      controller: 'BeerController'
    });
  }])

  .controller('BeerController', BeerController);

  function BeerController($scope, $http) {

    $scope.reverse = true;
    $scope.predicate = 'name';

    $scope.ordenar = function(predicado){
      $scope.reverse = !$scope.reverse;
      $scope.predicate = predicado;
    }
    var cerveja1 = {name: 'kaiser', price: 2};
    var cerveja2 = {name: 'skol', price: 3};
    var cerveja3 = {name: 'glacial', price: 4};
    var cerveja4 = {name: 'polar', price: 6};

    // ADICIONANDO AS CERVEJAS NO SCOPE DO CONTROLLER
    $scope.cervejas = [cerveja1, cerveja2, cerveja3, cerveja4];
  }

  BeerController.$inject = ['$scope', '$http'];

}());




