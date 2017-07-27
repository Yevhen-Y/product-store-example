//set routing
app.config(function($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider

        .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl',
        resolve: {
            delay: function($q, $timeout) {
                var delay = $q.defer();

                $timeout(delay.resolve, 1000);

                return delay.promise;
            }
          }
    })


    .when('/createItem', {
        templateUrl: 'templates/createItem.html',
        controller: 'createItemCtrl'
    })


   .otherwise({
        redirectTo: '/home'
      });

    $routeProvider.when('/home/:itemId', {
        templateUrl: 'templates/productDetail.html',
        controller: 'productDetailCtrl',
        resolve: {
            delay: function($q, $timeout) {
                var delay = $q.defer();

                $timeout(delay.resolve, 0);

                return delay.promise;
            }
          }
        })

    .when('/editProduct/:itemId', {
        templateUrl: 'templates/editProduct.html',
        controller: 'editProductCtrl',
      
    })


});