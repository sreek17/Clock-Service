var module = angular.module("myApp",[]);

module.controller("myCntrl",function($scope){
    $scope.name;
   var time = new Date(); 
    $scope.newTime = time.toTimeString();
    $scope.updateTime = function()
    {
        var time = new Date(); 
    $scope.newTime = time.toTimeString();
    }
});