(function (){
    'use strict';
    var showsService = function($http, $log, $q){
        return (function(){
            var showsAPI = '/shows';

            var getShows = function(){
                var deferred = $q.defer();
                
                $http.get(appConfigService.serverIP + showsAPI).then(function(res){
                    $log.debug('got shows');
                    deferred.resolve(res);
                }, function(err){
                    $log.error('failed to get shows');
                    deferred.reject(err);
                });
                return deferred.promise;
            };

            return {
                showsAPI: showsAPI,
                getShows: getShows
            };
        })();
    };

    angular.module('fmp')
        .factory('ShowsService', ['$http', '$log', '$q', showsService]);
}) ();