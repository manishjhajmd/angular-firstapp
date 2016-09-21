// JavaScript Document
// create the controller and inject Angular's $scope
phonecatApp.controller('blogController', function($scope, $http) {
	// create a message to display in our view
	$scope.blog = 'Everyone come and see how good I look!';
	$scope.manish=[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter","lastName":"Jones"}
];


$scope.header=["created on","client type", "name", "zone id", "modified","zone name","is active", "campaign id","region id" ]


$scope.myFunc = function() {


$scope.showMe = false;
$http.get("controller/cm.json")
	 .success(function(response) {
		 $scope.showMe = !$scope.showMe;
			 $scope.exam = response;
	 }).error(function(){
		 	alert('error');
	 });

	
	  }

});
