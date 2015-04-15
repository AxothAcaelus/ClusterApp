angular.module('clusterApp', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http, $timeout){ 
   
      $http.get('/pid').success(function(data) {
        $scope.currentPID = data;
        $timeout(updateID, 1000);
      });

    $scope.getMyPIDs = function() {
      $scope.cluster = [];
      for(var i = 0; i < 100; i++) { 
        $http.get('/pid').success(function(data) {
          console.log("getAll");
          console.log(data);
          $scope.cluster.push(data);
          $scope.currentPID = data;
        });
      }
    }
  } 
]);   
