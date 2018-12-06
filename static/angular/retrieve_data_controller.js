app.controller("myControllerTwo", function($scope, $http, SharedDataService){
	console.log("Controller Two");
	// Retrieve Data using SharedDataService
	//$scope.users = SharedDataService;
	$http.get("http://127.0.0.1:8000/api/v1/contact/")
	.then(function(response){
		$scope.users = response.data;
	})
	
	// Update Data
    $scope.selectUser = function(user){
		$scope.clickedUser = user;
	};
	
	// Delete Data
	$scope.deleteUser = function(){
		console.log($scope.users.indexOf($scope.clickedUser));
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.info = "User Deleted Successfully!";
	};
});
