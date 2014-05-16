// TODO : trouver le moyen d'intégrer ce service

(function() {
         var serviceModule = angular.module('myApp.twitterConnect', ['ngResource'])
 
         serviceModule.factory('twitter', function ($resource, $http) {
            var consumerKey = encodeURIComponent('yVFkkP2G4uWp7i5mdXeHjiXkt') //mettre une clée avec accès
            var consumerSecret = encodeURIComponent('WxhuXcfenlVy3yE5qPbpDnTTeK1feQ7OcjObvNP8eRJsLcny8k') //mettre une clée avec accès
            var credentials = Base64.encode(consumerKey + ':' + consumerSecret)
            // Twitters OAuth service endpoint
            var twitterOauthEndpoint = $http.post(
                'https://api.twitter.com/oauth2/token'
                , "grant_type=client_credentials"
                , {headers: {'Authorization': 'Basic ' + credentials, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
            )
            twitterOauthEndpoint.success(function (response) {
                // a successful response will return
                // the "bearer" token which is registered
                // to the $httpProvider
                serviceModule.$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + response.access_token
            }).error(function (response) {
                  // error handling to some meaningful extent
                })
        });     
})()
