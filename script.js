var app = angular.module("testApp", ["ngRoute", "ngAnimate"]);



app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'homePageController'
    })
    .when('/Resume', {
      templateUrl: 'resume.html',
      controller: 'resumePageController'
    })
    .otherwise({
      redirectTo: "/"
    });

  $locationProvider.html5Mode(true);
});


app.factory("tagLine", function() {
  var tagLines = [
    "Wannabe Wizard", "Sup3r 1337 Hax0r", "Food to Code Converter",
    "Programmer", "Software Engineer", "Computer Scientist", "Roboticist",
    "Slightly Above a Script Kiddie"
  ];

  return tagLines[Math.floor(Math.random() * tagLines.length)];
});

app.controller("mainContentController", ["$scope", "$location", "tagLine",
  function($scope, $location, tagLine) {
    
    $scope.tagLine = tagLine;

    $scope.gotoResumePage = function() {
      $location.path("/Resume");
    };
    
    $scope.gotoHomePage = function() {
      $location.path("/");
    };
  }
]);

app.controller("homePageController", ["$scope", "$location",
  function($scope, $location) {

  }
]);

app.controller('resumePageController', ["$scope", "$location",
  function($scope, $location) {

  }
]);