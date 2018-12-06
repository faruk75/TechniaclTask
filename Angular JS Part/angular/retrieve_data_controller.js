app.controller("myControllerTwo", function($scope, SharedDataService){
	console.log("Controller Two");
	// Retrieve Data using SharedDataService
    $scope.users = SharedDataService;
	
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