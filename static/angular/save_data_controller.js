// Save Data
app.controller("myControllerOne", function($scope, $http){
    $scope.newUser = {};

    $scope.saveUser = function(){
        contact = {
            name: $scope.newUser.fname,
            mobileNumber: $scope.newUser.nbr
        };
        $http.post("http://127.0.0.1:8000/api/v1/contact/",contact)
        .then(
            function SuccessCallback(response){   
            alert("Successfully saved in API");
        },
        function errorCallback(response){
            alert('Error while saving in API');
        })
        $scope.newUser = {};
    };
});
