var app = angular.module('angularExample');

app.controller('EventsCtrl', ['$scope', 'Event', function($scope, Event) {
	
	$scope.events = Event.query();
	$scope.filterEvents = function() {
    Event.search({query: $scope.search},
      function(response, _headers) {
        $scope.events = response;
      }
    );
  };
  // $scope.events = [
  //   { name: 'Event 1', event_date: '01/10/2016', description: 'Description #1', place: 'Place #1'},
  //   { name: 'Event 2', event_date: '02/10/2016', description: 'Description #2', place: 'Place #2'},
  //   { name: 'Event 3', event_date: '03/10/2016', description: 'Description #3', place: 'Place #3'},
  //   { name: 'Event 4', event_date: '04/10/2016', description: 'Description #4', place: 'Place #4'},
  //   { name: 'Event 5', event_date: '05/10/2016', description: 'Description #5', place: 'Place #5'}
  // ];

  $scope.addEvent = function() {
    if (!valid()) { return false; }

    Event.save($scope.event,
      function(response, _headers) {
        $scope.events.push(response);
      },
      function(response) {
        alert('Errors: ' + response.data.errors.join('. '));
      }
    );

    $scope.event = {};
  };
}]);