 AudioController = function(scope,localStorageService,$rootScope,API_VERSION,$upload,dateFilter,$timeout,RequestSender,route,$modal)
 {
	 
	 scope.formData = {};
		scope.sampleSubmissionDatas = [];
		//District
		scope.searchCategory=function(id)
		{
	    	  
	    	scope.searchCategory123 = function(offset, limit, callback)
	    	{
	    		RequestSender.submissionResource.getAllDetails({offset: offset, limit: limit,id: id} , function(data)
	    		{
	       	    	scope.totalSubmissions = data.totalFilteredRecords;
	       	    	scope.allDatas = data.pageItems;
	       	    	if(scope.totalSubmissions%25 == 0)	
	       	    		scope.totalPages = scope.totalSubmissions/25;
	       	    	else
	       	        	scope.totalPages = Math.floor(scope.totalSubmissions/25)+1;
	       	        	
	       	    	/*if(scope.config.password == 'true')
	       	    	{
	       	    		passwordSetToStar();
	       	    	}*/
	       	    	callback(data);
	       		});
	    	};
	    	   
	    	scope.sampleSubmissionDatas = paginatorService.paginate(scope.searchCategory123, 24);
	    };
	    
	    
	    scope.searchSampleSubmission123 = function(offset, limit, callback){
	    	RequestSender.sampleSubmissionResource.getAlldetails({offset: offset, limit: limit , 
			     sqlSearch: scope.filterText } , callback); 
			   };
			  		
			  scope.searchSampleSubmission = function(filterText) {
			  		scope.sampleSubmissionData = paginatorService.paginate(scope.searchSampleSubmission123, 14);
			  };
	   
	  scope.sampleSubmissionFetchFunction = function(offset, limit, callback) {
		  RequestSender.sampleSubmissionResource.getAlldetails({offset: offset, limit: limit},callback);  
			 };
				  		
			  scope.getSampleSubmission = function() {
				  if(PermissionService.showMenu('READ_SAMPLESUBMISSION'))
				  	scope.sampleSubmissionData = paginatorService.paginate(scope.getSampleSubmission, 14);
			  };	
		
	 
	 
	 /*
		RequestSender.clientCategoryResource.get({},function(data)
		{
	 	 	scope.clientCategoryDatas = data.clientCategoryDatas;
	 	   	scope.officeDatas = data.officeOptions;
	    });
	    
	    
	    scope.searchassetdetails123 = function(offset, limit ,callback)
	    {
			resourceFactory.assetdetailsResource.getAllassets({offset: offset, limit: limit ,
			sqlSearch: scope.filterText } , callback); 
		};
			  		
		scope.searchassetdetails = function(filterText)
		{
			scope.assetDetails = paginatorService.paginate(scope.searchassetdetails123, 14);
		};
			  		
		scope.assetdetailsFetchFunction = function(offset, limit, callback)
		{
			resourceFactory.assetdetailsResource.getAlldetails({offset: offset, limit: limit } , callback);
		};
			  		
		scope.getAssetDetails = function ()
		{
			if(PermissionService.showMenu('READ_ASSETDETAILS'))
			scope.assetDetails = paginatorService.paginate(scope.assetdetailsFetchFunction, 14);          
		};
		
		
		scope.nextPageNo = function()
		{
	    	if(scope.pageNo < scope.totalPages)
	    	scope.pageNo +=1;
	    };
	      
	    scope.previousPageNo = function()
	    {
	    	if(scope.pageNo >1)
	    	scope.pageNo -=1;
	    };
	      
	    scope.lastPageNo = function()
	    {
	     	scope.pageNo =scope.totalPages;
	    };
	      
	    scope.firstPageNo = function()
	    {
	     	scope.pageNo =1;
	    };
	      
	    scope.routeTo = function(id)
	    {
	    	location.path('/viewclient/'+ id);
	    };
	           
	    if(PermissionService.showMenu('READ_CLIENT'))
	    	scope.clients = paginatorService.paginate(fetchFunction, 24);
	      
	   */
 };   
selfcareApp.controller('AudioController', [ '$scope','localStorageService','$rootScope','API_VERSION','$upload','dateFilter','$timeout','RequestSender','$route','$modal',AudioController]);
