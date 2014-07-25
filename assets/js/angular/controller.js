var blogControllers = angular.module('blogControllers', ['ngSanitize', 'ngCkeditor']);

blogControllers.controller('ListBlog', ['$scope', '$http', function ($scope, $http) {
  $http.get('/blog').success(function (data) {
    $scope.blog = data;
  });

}]);

blogControllers.controller('SingleBlog',
  ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
      $http.get('/blog/' + $routeParams.id).success(function (data) {
        $scope.blog = data;
      });
    }
  ]
);
blogControllers.controller('CreateBlog',
  ['$scope', '$http', '$routeParams',
    function ($scope, $http) {

      $scope.editorOptions = {
        language: 'en',
        height:200
      };

      $scope.submit = function () {
        var data = {
          title: $scope.title,
          category: $scope.category,
          description: $scope.description,
          content: $scope.content
        };
        $http.post('/blog/', data).success(function (data) {
          console.log(data);
        });
      };

    }
  ]
);