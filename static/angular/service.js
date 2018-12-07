// Sharing Data Service
app.service("SharedDataService", function($http){
    
    console.log("Gqeqqeq");
    function getUpdatedContact(){
        $http.get("http://127.0.0.1:8000/api/v1/contact/")
        .then(function SuccessCallback(response){
            alert('Inside getUpdatedContact() method');
            return response.data;
        },
        function errorCallback(response){
            alert('Error Occured');
        })
    }
});