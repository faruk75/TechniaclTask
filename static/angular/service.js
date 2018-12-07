// Sharing Data Service
app.service("SharedDataService", function($http){
    function getUpdatedContact(){
        $http.get("http://127.0.0.1:8000/api/v1/contact/")
        .then(function(response){
            alert('Inside getUpdatedContact() method');
            return response.data;
        })
    }
});