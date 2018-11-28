var app = angular.module("myApp", []);

app.controller("mainCtrl", function($scope, $http, $window){
    $scope.repos = [];

    $scope.getRepos = function(){
        $http.get("https://api.github.com/users/AustinRichburg/repos")
            .then(function(response){
                //console.log("SUCCESS: " + JSON.stringify(response));
                $scope.repos = response.data;
                $scope.repos.forEach(repo => {
                    repo.created_at = new Date(repo.created_at);
                    repo.updated_at = new Date(repo.updated_at);
                });
            }, function(response){
                console.log("FAILED: " + response);
            });
    }

    $scope.redirectToRepo = function(path){
        $window.open(path);
    }
});