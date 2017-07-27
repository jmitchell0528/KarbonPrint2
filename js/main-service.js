angular.module('karbonPrint').service('mainService', function($http)  {

  this.getGame = function(name) {
    return $http ({
      method: 'GET',
      url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,summary&limit=10&order=release_dates.date%3Adesc&search=zelda',
      // url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,summary&limit=10&order=release_dates.date%3Adesc&search=' + name,
      headers: {'X-Mashape-Key': 'oj3Yv6l6Lbmsh8nrwm7unTQ6mClsp1wRQ9ujsnJ375kwZX20qy'
      }
    })

    .then(function(result)  {
      console.log(result)
      return result.name
    })
  }
})
