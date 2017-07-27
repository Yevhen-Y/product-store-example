app.controller('homeCtrl', [ '$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {

//default products
        var defProducts = {
        'items': [
        {
        'title': 'Hand-Painted Blue Pumpkins',
        'description': 'You’re looking for that perfect pumpkin, and you want something classic without going the usual orange route. May we introduce this solid design investment? With a unique hand-painted weathered blue color and realistic stem, these pumpkins are crafted of resin to stand the test of seasons. Add them to your seasonal patch.',
        'price': '$7.95 - $19.95',
        'pictureURL': 'images/1.jpg'
},
{
        'title': 'Shiplap Rooster Wall Decor',
        'description': "Shiplap has become something of a superstar in the design world. And what better way to display this trending wood's vintage-charm-meets-updated-farmhouse appeal than as a backdrop for our handsome rooster? And just look at his colors—a finely feathered focal point, for sure.",
        'price': '$199.20',
        'pictureURL': 'images/2.jpg'
},
{
        'title': 'Coral Embroidered Maui Pillow',
        'description': 'Add a luxe touch to your patio furniture with our newest collection of UV-resistant outdoor pillows. Channeling an oceanic vibe, it features an embroidered design in a contrasting shade of ivory. The look is obviously indigenous to any well-decorated garden or patio.',
        'price': '$28.00',
        'pictureURL': 'images/3.jpg'
},
{
        'title': 'Hummingbird Wind Chimes',
        'description': 'Crafted by hand with pastel-painted glass and powder-coated iron, these chimes have a unique look. Place this little charmer by the sunlight and watch while its solar-powered belly becomes the limelight after dark.',
        'price': '$27.96',
        'pictureURL': 'images/4.jpg'
},
{
        'title': 'Faux Fall Magnolia Lantern',
        'description': 'Light up your fall decor with our lantern, which sits surrounded by beautiful magnolia leaves and rustic pinecones made fresh by a few dabs of shiny paint. The only thing missing is the soft glow of candlelight flickering from inside.',
        'price': '$48.96',
        'pictureURL': 'images/5.jpg'
},
{
        'title': 'Seahorse Melamine Chip & Dip',
        'description': 'From the depths of the sea to the top of your table, our seahorse surfaces as a whimsical work of art for dining indoors and out. His sculptural shade adds an aquatic accent to the occasion while his melamine construction serves up shatter-resistant durability.',
        'price': '$19.98',
        'pictureURL': 'images/6.jpg'
}
]
};

//store default data to local storage
if( localStorage.length < 1) {
for (i in defProducts.items) {
	localStorage.setItem('ngStorage-'+ defProducts.items[i].title, JSON.stringify(defProducts.items[i]));

}
};

//get data from localStorage
 $scope.newProductList = [];
 
for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        $scope.newProductList.push(JSON.parse(localStorage.getItem(key)));
        $scope.myProducts = $scope.newProductList;
    }

}]);