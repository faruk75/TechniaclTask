app.controller("myControllerFour", function($scope, $http, SharedDataService){
    // Delete Data
	$scope.deleteUser = function(){
		$http.delete("http://127.0.0.1:8000/api/v1/contact/"+ $scope.clickedUser.id )
		.then(
		function SuccessCallback(response){   
			alert("Successfully Deleted");
			$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
			//$state.go('/show_data');
			// Get method will be called again
			// Not Working
			// $scope.users = SharedDataService.getUpdatedContact();    // SharedDataService.getUpdatedContact is not a function
			// console.log($scope.users);
			// alert('After getUpdatedContact() method'); // Not executing
        },
        function errorCallback(response){
            alert('Deletion NOT Possible');
        })
	};
});