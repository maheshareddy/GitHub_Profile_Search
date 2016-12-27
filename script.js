// Code 

var app = angular.module('searchApp',[]);

app.controller('searchController',function($scope,$http){
   
   $scope.searching = false; 
   $scope.user = { test : '1234'};
   $scope.msg ='';
   
   $scope.searchUser = function(){
     
     console.log('in searchUser function');
  if($scope.searchInpt && $scope.searchInpt !== ""){
        $scope.msg = '';
           $scope.searching = true;
       console.log('searching');
        $http.get('https://api.github.com/users/' + $scope.searchInpt)
        .then(function(data){
          $scope.searching = false;
          $scope.user= data;
          $scope.searchInpt = '';
        },function(err){
          $scope.searching = false;
          $scope.user = err;
          console.log('problem searching data');
        });
        
     }else{
       $scope.msg ="please enter username to search";
     }
   }
   
});
