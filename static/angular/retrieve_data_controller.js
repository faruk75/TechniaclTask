app.controller("myControllerTwo", function($scope, $http,  $state, SharedDataService){
	console.log("Controller Two");
	$http.get("http://127.0.0.1:8000/api/v1/contact/")
	.then(function SuccessCallback(response){
		$scope.users = response.data;
	},
	function errorCallback(response){
		alert('Update NOT Possible');
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
			$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        },
        function errorCallback(response){
            alert('Deletion NOT Possible');
        })
	};
});
