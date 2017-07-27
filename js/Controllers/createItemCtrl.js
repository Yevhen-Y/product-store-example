app.controller('createItemCtrl', ['$scope','$localStorage', function ($scope,$localStorage){
// save data into localStorage
$scope.saveData = function(product){
        var newProduct = {
        'title': product.title,
        'description': product.description,
        'price': product.price,
        'pictureURL': product.url
}
        $localStorage[newProduct.title] = newProduct;
    };
}]);