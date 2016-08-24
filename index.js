angular.module('app', []);

//The Controller

angular.module('app').controller('HomeCtrl', function($scope, $http) {
    $http.get('http://localhost:56433/api/TopSpots').then(
    	function(response) {
        	$scope.topspots = response.data;
    	}
   	);

   	$scope.addSpots = [{
	"name": "Add a Place",
	"description": "Add a Description",
	"location": "Add its location"}
	];

});





/* My Original Code

angular.module('sanDiegoTopSpots', [])

.controller('topSpotsCtrl', function($scope, $http) {
    $http.get('topspots.json').success(function(response) {
        $scope.topspots = response;
    });

});

*/



/*Might be Useful for extras someday. MIGHT

        <div class="allOfIt">
            <label ng-hide="editing" class="editing-label">Type
            </label>
            <input placeholder="Type a Location!" ng-show="editing" ng-model="addspot.name" class="editing-label" type="text" />
        </div>
        <div class="actions">
            <div>
                <a href="" ng-click="editing = !editing">edit</a>
                <a href="">save</a>
                <a href="" class="delete">delete</a>
            </div>
        </div>

                        <tr ng-repeat="addSpot in addSpots">
                    <td>{{addspot.name}}</td>
                    <td>{{addspot.description}}</td>
                    <td>{{addspot.location}}</td>
                </tr>

                */



