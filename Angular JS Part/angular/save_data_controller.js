// Save Data
app.controller("myControllerOne", function($scope, SharedDataService){
    console.log("Controller One");
    $scope.newUser = {};
    $scope.users = SharedDataService;

    $scope.saveUser = function(){
        console.log("Inside Save Method");
        $scope.users.push($scope.newUser);
        alert('Insertion Successful');
        $scope.newUser = {};
    };
});