
// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

// configure our routes
phonecatApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'views/about.html'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'views/contact.html'
		})
		
		// route for the contact page
		.when('/blog', {
			templateUrl : 'views/blog.html',
			controller : 'blogController'
		})
		
		// route for the services page
		.when('/services', {
			templateUrl : 'views/services.html',
			controller : 'servicesController'
		});
		
		
});