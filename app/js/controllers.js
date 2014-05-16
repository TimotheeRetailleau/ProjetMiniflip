
/* Controllers */

angular.module('myApp.controllers', ['ngResource'])

  .controller('HomeCtrl', ['$scope', function($scope) {
	  $scope.searchTerm = "Key Word";
	  $scope.run = function(){
		  alert("working");
		}
  }])
  .controller('TwitterCtrl', ['$scope','$resource',function($scope,$resource) {
	  $scope.searchTerm = "#"+"angular"; //à remplacer par le terme recherche via le service
	  $scope.twitter = $resource('https://api.twitter.com/1.1/search/:action',
                {action: 'tweets.json',
					q: $scope.searchTerm,
                    count: 10,
                },
                {
                    paginate: {method: 'GET'}
                })
	  $scope.doSearch = function(){
		  $scope.twitterResult = $scope.twitter.get();
		};
	  $scope.selectTweet(tweetNumber){
		  $scope.selectedTweet=tweetNumber;
		  }

	}]);
	  
