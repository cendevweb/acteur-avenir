(function() {
	
	'use strict';
	angular
	 .module('AA')
	 .controller('homeCtrl', ['$http','$timeout',homeCtrl]);

	 function homeCtrl($http, $timeout){
	 	const home = this;

	 	var timer;
	 	var timerErr;
	 	home.msgs = "";
	 	home.errors = "";
	 	home.verif = false

	 	home.verifyKey = function(){
	 		if(home.key == "testkey"){
	 			home.verif = true;
	 		}else{
	 			home.verif = false;
	 		}
	 	}

	 	home.postMsg = function(){
	 		 home.d  = new Date()
	 		 home.time = home.d.toTimeString();
	 		 home.time = home.time.split(' ')[0];
	 		 home.time = home.time.substring(0,5);
	 		 home.time = home.time.replace(":", "h");
	 		 $http.post('..//5avril/libs/insert.php', {
	 		 							'nom': home.nom,
	 		 							'intervenant': home.intervenant,
	 		 							'fonction': home.fonction,
	 		 							'message': home.message,
	 		 							'date' : home.time,
	 		 							}
                    ).then(function(result) {
                        if (result.data.msg != '')
                        {
                        	//var time = undefined
                            home.msgs = "";
							home.msgs = result.data.msg;
							home.message = "";
							home.intervenant = "";
							timer = $timeout(function () {
							  home.msgs = "";	
							  $timeout.cancel(timer);
							}, 10000);

                        }
                        else
                        {
                            home.errors = "";
							home.errors = result.data.error;
							timerErr = $timeout(function () {
							  home.errors = "";	
							  $timeout.cancel(timerErr);
							}, 10000);
                        }
                    })	
	 	}
	 };
	 homeCtrl.$inject = ['$http'];
})();