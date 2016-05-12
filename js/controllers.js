app.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.view = {};
  // $scope.view.searchKeyword = '';
  // $scope.view.search = function() {
  //   $http.get('http://www.omdbapi.com/?s=' + $scope.view.searchKeyword)
  //   .then(data => {
  //     $location.path('/');
  //     $scope.view.results = data.data.Search;
  //     console.log($scope.view.results);
  //   });
  //   $scope.view.searchKeyword = '';
  // }
}]);

app.controller('ShowController', ['$scope', '$location', '$http', function($scope, $location, $http) {
  $scope.view = {};
  $scope.view.id = $location.path().slice(1);
  $http.get('http://www.omdbapi.com/?i=' + $scope.view.id)
    .then(data => {
      $scope.view.movie = data.data;
      console.log($scope.view.movie);
    });
}]);

app.controller('ParentController', ['$scope', '$location', '$http', function($scope, $location, $http) {
  $scope.view = {};
  $scope.view.searchKeyword = '';
  $scope.view.id = $location.path();
  $scope.view.search = function() {
    $http.get('http://www.omdbapi.com/?s=' + $scope.view.searchKeyword)
    .then(data => {
      $location.path('/');
      $scope.view.results = data.data.Search;
      console.log($scope.view.results);
    });
    $scope.view.searchKeyword = '';
  }
}])
