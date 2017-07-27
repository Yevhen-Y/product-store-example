app.controller('productDetailCtrl', ['$scope', '$routeParams', '$localStorage', function($scope, $routeParams, $localStorage) {
  //set route params
    console.log($routeParams); 
    $scope.item = $routeParams.itemId;

//get current product from localStorage
$scope.newProductList = [];
 
        $scope.newProductList.push(JSON.parse(localStorage.getItem('ngStorage-'+ $scope.item)));
        $scope.myProducts = $scope.newProductList;

//delete product
    $scope.deleteProduct = function() {
        if (confirm("Do you want to delete this product?") == true) {
    localStorage.removeItem('ngStorage-'+$scope.item)

}
       
    }

}]);