angular.module('clusterApp', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
    

    
    $http.get('/pid/').success(function(data) {
      $scope.currentPID = data;
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
