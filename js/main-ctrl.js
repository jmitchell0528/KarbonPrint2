angular.module('karbonPrint').controller('mainCtrl', function($scope, mainService) {

  // $scope.test = "Hello! I'm working too!"
  mainService.getGame().then(function(result) {
    console.log(result)
    $scope.games = result
    
  })
})
