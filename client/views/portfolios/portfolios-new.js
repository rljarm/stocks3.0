'use strict';

angular.module('poseidon')
.controller('PortfoliosNewCtrl', function($scope, Portfolio, $state){

  $scope.addPortfolio = function(name){
    Portfolio.add(name).then(function(){
    $state.go('portfolios.list');
  });
  };
});
