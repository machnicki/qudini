(function (window) {

    window.app = angular.module('qudini.QueueApp', []);

    /**
     * Bonus points - manipulating the without waiting for the
     * server request
     */
    app.controller('QueueCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.customers = [];
		$scope.customersServed = [];

		_getCustomers();
		_getServedCustomers();

		$scope.onCustomerAdded = function(){
			_getCustomers();
		}

		$scope.onCustomerRemoved = function(){
			_getCustomers();
		}

		$scope.onCustomerServed = function(){
			_getCustomers();
			_getServedCustomers()
		}

		function _getServedCustomers(){
			return $http.get('/api/customers/served').then(function(res){
				$scope.customersServed = res.data;
			})
		}

		function _getCustomers(){
			return $http.get('/api/customers').then(function(res){
				$scope.customers = res.data;
			})
		}
	}]);


})(window);

