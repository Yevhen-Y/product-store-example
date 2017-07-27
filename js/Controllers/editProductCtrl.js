app.controller('editProductCtrl', ['$scope', '$routeParams', '$localStorage', function($scope, $routeParams, $localStorage) {
  //set route params
    console.log($routeParams); 
    $scope.item = $routeParams.itemId;
console.log($scope.item); 
//get current product from localStorage
$scope.newProductList = [];
        $scope.newProductList.push(JSON.parse(localStorage.getItem('ngStorage-'+ $scope.item)));
        $scope.myProducts = $scope.newProductList;
        console.log($scope.myProducts)

       //update data and save in local storage
        $scope.updateData = function(product){
        var newProduct = {
        'title': product.title,
        'description': product.description,
        'price': product.price,
        'pictureURL': product.url
}
//delete old item
localStorage.removeItem('ngStorage-'+$scope.item)
// add data if it needs
if(newProduct.title == undefined){
    newProduct.title = $scope.newProductList[0].title
}
 if(newProduct.description == undefined){
    newProduct.description = $scope.newProductList[0].description
}
 if(newProduct.price == undefined){
    newProduct.price = $scope.newProductList[0].price
}
 if(newProduct.pictureURL == undefined){
    newProduct.pictureURL = $scope.newProductList[0].pictureURL
}
// Save the new item with updated value
localStorage.setItem('ngStorage-'+ newProduct.title,JSON.stringify(newProduct));

    };

	}]);