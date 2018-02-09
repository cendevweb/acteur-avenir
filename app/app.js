(function() {
	'use strict';

 	angular
 	.module('AA', ['ui.router'])
 	.config( function($locationProvider, $stateProvider){
		// Suppression du # prefix
		

 		/**
 		* Configuration des routes de mon app
 		*/
 		$stateProvider
 			.state({
 				name			:'home',
 				url				:'/',
 				templateUrl		:'module/home/home.html',
 				controller 		:'homeCtrl',
 				controllerAs	:'home'
 			})
 			.state({
 				name			:'result',
 				url				:'result',
 				templateUrl		:'module/result/result.html',
 				controller 		:'resultCtrl',
 				controllerAs	:'result'
 			})
 			.state({
 				name			:'admin',
 				url				:'admin',
 				templateUrl		:'module/admin/admin.html',
 				controller 		:'adminCtrl',
 				controllerAs	:'admin'
 			})
 	})
 	.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Etes vous sur ?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }]);



	
})();