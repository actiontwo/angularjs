var myApp = angular.module('myApp', [
  'ngRoute',
  'blogControllers'
]);
myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/blog/', {
      templateUrl: 'templates/blog/page.html',
      controller: 'ListBlog'
    }).
    when('/blog/:id/', {
      templateUrl: 'templates/blog/single.html',
      controller: 'SingleBlog'
    }).
    when('/create/blog', {
      templateUrl: 'templates/blog/create.html',
      controller: 'CreateBlog'
    })
}]);