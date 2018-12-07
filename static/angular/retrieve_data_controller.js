app.controller("myControllerTwo", function($scope, $http,  $state, SharedDataService){
	console.log("Controller Two");
	// Retrieve Data using SharedDataService
	//$scope.users = SharedDataService;
	$http.get("http://127.0.0.1:8000/api/v1/contact/")
	.then(function(response){
		$scope.users = response.data;
		console.log($scope.users);
	})
	
    $scope.selectUser = function(user){
		$scope.clickedUser = user;
	};

	// Update Data
	$scope.updateUser = function(){
		contact = {
            name: $scope.clickedUser.name,
            mobileNumber: $scope.clickedUser.mobileNumber
        };
		$http.patch("http://127.0.0.1:8000/api/v1/contact/"+ $scope.clickedUser.id + '/',contact)
		.then(
			function SuccessCallback(response){   
			alert("Successfully Updated");
			// Get method will be called again
        },
        function errorCallback(response){
            alert('Update NOT Possible');
        })
	};
	// Delete Data
	$scope.deleteUser = function(){
		$http.delete("http://127.0.0.1:8000/api/v1/contact/"+ $scope.clickedUser.id )
		.then(
		function SuccessCallback(response){   
			alert("Successfully Deleted");
			//$state.go('show_data');
			// Get method will be called again
			// Not Working
			$scope.users = getUpdatedContact();   // Not executing 
			alert('After getUpdatedContact() method'); // Not executing
        },
        function errorCallback(response){
            alert('Deletion NOT Possible');
        })
	};
});
