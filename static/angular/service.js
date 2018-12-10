//Sharing Data Service
app.service("SharedDataService", function($http){
    
    console.log("Gqeqqeq");
    function getUpdatedContact(){
        alert('Inside getUpdatedContact() method');
        $http.get("http://127.0.0.1:8000/api/v1/contact/")
        .then(function SuccessCallback(response){
            //alert('Inside getUpdatedContact() method');
            return response.data;
        },
        function errorCallback(response){
            alert('Error Occured');
        })
    }
});


// Sharing Data Service
// app.service("SharedDataService", function($http, user){
//     $scope.selectUser = function(){
//         $scope.clickedUser = user;
//     }
// });