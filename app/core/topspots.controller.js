//search controller

(function() {
    'use strict';

    angular
        .module('topSpotsApp')
        .controller('topSpotsController', topSpotsController);

    //injecting movie factory to search controller
    topSpotsController.$inject = ['topSpotsFactory'];

    function topSpotsController(topSpotsFactory) {
        var vm = this;
        topSpotsFactory.getTopSpot().then(
            function(data) {
                vm.topspot = data;
                console.log(vm.topspot);
            },
            function(error) {

            });
    }

})();
