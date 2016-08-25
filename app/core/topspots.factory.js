//factory

(function() {
    'use strict';

    angular
        .module('topSpotsApp')
        .factory('topSpotsFactory', topSpotsFactory);

        //injecting parameters to the factory
    topSpotsFactory.$inject = ['$http', '$q'];

    function topSpotsFactory($http, $q) {
        var service = {
            getTopSpot: getTopSpot
        };

        return service;

        function getTopSpot(spot) {
            var deferred = $q.defer();

            //communicating with the api
            $http.get('http://localhost:56433/api/TopSpots').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            //returns the array
            return deferred.promise;
        }

    }
})();