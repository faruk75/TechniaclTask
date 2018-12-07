// Save Data
app.controller("myControllerOne", function($scope, $http){
    console.log("Controller One");
    $scope.newUser = {};
    //$scope.users = SharedDataService;

    $scope.saveUser = function(){
        console.log("Inside Save Method");
        contact = {
            name: $scope.newUser.fname,
            mobileNumber: $scope.newUser.nbr
        };
        $http.post("http://127.0.0.1:8000/api/v1/contact/",contact)
        .then(
            function SuccessCallback(response){   
            alert("Success");
        },
        function errorCallback(response){
            alert('Error');
        })
        $scope.newUser = {};
    };
});
