angular.module('karbonPrint').controller('mainCtrl', function($scope, mainService) {

  // $scope.test = "Hello! I'm working too!"
  mainService.getGame().then(function(result) {
    console.log(result)
    $scope.games = result;

    $scope.navFunction = function() {
      var x = document.getElementById('myTopnav');
      if (x.className === "nav")  {
        x.className += "responsive";
      }
      else  {
        x.className = "nav";
      }
    }

    var modal = document.getElementById('myModal');

    $scope.modalBtn = function() {
      var modalBtn = document.getElementsByClassName('search-position');
      modal.style.display = "block";
    }

    $scope.span = function() {
      var span = document.getElementsByClassName('close')[0];
      modal.style.display = "none";
    }

    window.onclick = function(event)  {
      if (event.target == modal)  {
        modal.style.display = "none";
      }
    }

  })
})
