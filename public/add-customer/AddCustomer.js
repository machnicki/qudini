(function (app) {
    app.directive('addCustomer', ['$http', AddCustomer]);


    function AddCustomer($http){
        return {
            restrict: 'E',
            scope:{
                onAdded: '&'
            },
            templateUrl:'/add-customer/add-customer.html',
            link: function(scope){

                scope.products = [
                    {name: 'Grammatical advice'},
                    {name: 'Magnifying glass repair'},
                    {name: 'Cryptography advice'}
                ];

				//disable submit button for empty values
				scope.preventSubmit = function(){
					if (scope.name && scope.product) {
						return false;
					} else return true;
				}

                scope.addCustomer = function(){
					$http({
						method: 'POST',
						url: '/api/customer/add',
						data: {
							name: scope.name,
							product: scope.product
						}
					}).then(function() {
						scope.onAdded()()
					})
                }
            }
        }
    }

})(app);

