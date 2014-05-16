
/* Controllers */

angular.module('myApp.controllers', ['ngResource'])

  .controller('HomeCtrl', ['$scope', function($scope) {
	  $scope.searchTerm = "Key Word";
	  $scope.run = function(){
		  alert("working");
		}
  }])
  .controller('TwitterCtrl', ['$scope','$resource',function($scope,$resource) {
	  $scope.twitter = $resource('https://api.twitter.com/1.1/search/:action',
                {action: 'tweets.json',
					q: angular,
                    count: 10,
                },
                {
                    paginate: {method: 'GET'}
                })
	  $scope.doSearch = function(){
		  $scope.twitterResult = $scope.twitter.get();
		};

	}]);
	  
