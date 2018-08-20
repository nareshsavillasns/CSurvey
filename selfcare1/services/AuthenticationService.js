selfcareApp.service("AuthenticationService",['HttpService','API_VERSION','$rootScope',function(httpService,API_VERSION, rootScope){
      this.authenticateWithUsernamePassword = function(handler) {
    	  rootScope.inValidUser = false;
    	  httpService.post("http://localhost:5000/api/auth/signin?username="+rootScope.username+"&password="+rootScope.password)
	          .success(function(data){
	        	  httpService.setAuthorization(data.base64EncodedAuthenticationKey);
	        	  handler(data);
	          })
	          .error(function(data){
	        	  rootScope.inValidUser = true;
	        	  /*rootScope.invalidCredentialFun(rootScope.inValidUser);*/
	      		/*alert("Main Role Authentication Failure");*/
	        	 /* alert("Please Ender Valid User Name and Password");*/
	      	});

      };

}]);
