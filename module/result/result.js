(function() {
	
	'use strict';
	angular
	.module('AA')
	.controller('resultCtrl', ['$http','$timeout',resultCtrl]);

	function resultCtrl($http, $timeout){
		const result = this;


		result.datas = [];

		result.getMsg = function(){
			$http.get('../5avril/libs/read.php').then(function(response) {
				result.datas = response.data;
				$timeout(result.getMsg, 60000);
			})	
		}
		result.getMsg();
	};
	resultCtrl.$inject = ['$http'];

})();