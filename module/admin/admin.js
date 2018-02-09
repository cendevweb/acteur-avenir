(function() {
	'use strict';
	angular
	.module('AA')
	.controller('adminCtrl', ['$http','$timeout',adminCtrl]);

	function adminCtrl($http,$timeout){
		const admin = this;
		/* Parti recup*/
		admin.datas = [];
		var timer;
	 	var timerErr;
		
		admin.getMsg = function(){
			$http.get('../5avril/libs/read.php').then(function(response) {
				admin.datas = response.data;

			})	
		}
		admin.getMsg();

		/* Parti post*/
		admin.msgs = "";
	 	admin.errors = "";
		admin.modify = function($index){
			
			$http.post('../5avril/libs/modify.php', {
				'id'		: admin.datas[$index].id,
				'nom'		: admin.datas[$index].nom,
				'intervenant'	: admin.datas[$index].intervenant,
				'fonction'	: admin.datas[$index].fonction,
				'message'	: admin.datas[$index].message
			}
			).then(function(result) {
				if (result.data.msg != '')
				{
					admin.msgs = "";
					admin.msgs = result.data.msg;
					timer = $timeout(function () {
							  admin.msgs = "";	
							  $timeout.cancel(timer);
							}, 10000);
					admin.datas = [];
					$http.get('../5avril/libs/read.php').then(function(response) {
						admin.datas = response.data;

					})	
				}
				else
				{
					admin.errors = "";
					admin.errors = result.data.error;
					timerErr = $timeout(function () {
							  admin.errors = "";	
							  $timeout.cancel(timerErr);
							}, 10000);
				}
			})	
		}
		admin.delete = function($index){
			$http.post('../5avril/libs/delete.php', {
				'id'		: admin.datas[$index].id,
			}).then(function(result) {
				if (result.data.msg != '')
				{
					admin.msgs = "";
					admin.msgs = result.data.msg;
					timer = $timeout(function () {
							  admin.msgs = "";	
							  $timeout.cancel(timer);
							}, 10000);
					admin.datas = [];
					$http.get('../5avril/libs/read.php').then(function(response) {
						admin.datas = response.data;

					})
				}
				else
				{
					admin.errors = "";
					timerErr = $timeout(function () {
							  admin.errors = "";	
							  $timeout.cancel(timerErr);
							}, 10000);
					admin.errors = result.data.error;
				}
			})
		}
	};
	adminCtrl.$inject = ['$http'];
})();