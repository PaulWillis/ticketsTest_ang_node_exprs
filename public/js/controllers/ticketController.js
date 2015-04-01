angular.module('ticketController', [])

	// inject the Todo service factory into our controller
	.controller('mainTicketController', ['$scope','$http','Tickets', function($scope, $http, Tickets) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Tickets.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

	}]);
