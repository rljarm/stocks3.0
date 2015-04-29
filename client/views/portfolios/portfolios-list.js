'use strict';

angular.module('poseidon')
.controller('PortfoliosListCtrl', function($scope){
  $scope.names = $scope.afUser.names ? $scope.afUser.names.split(',') : [];


});
