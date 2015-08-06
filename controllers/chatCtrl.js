app.controller('chatCtrl', function($scope, parseService){

    ($scope.getParseData = function() {
        parseService.getData().then(function(response) {
            $scope.messages = response.data.results;
            console.log(response);
        });
    })();

    ($scope.formatDate = function(dateString) {
        return new Date(dateString).toLocaleString();
    });

    ($scope.postData = function() {
        parseService.postData($scope.message);
    });

  setInterval(function(){
    $scope.getParseData();
  }, 1500)
})