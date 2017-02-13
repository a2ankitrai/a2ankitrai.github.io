'use strict';

/* Services */

var ankAppServices = angular.module('ankAppServices', []);

    /**************************************
	* Utility service
	***************************************/
	
	/*ankAppServices.factory('utility', function(){
		return {
			contains : function(value1, value2){
				return ANK_REST.contains(value1, value2);
			},
			replaceParameters : function(string, values){
				return ANK_REST.replaceParameters(string, values);
			}
		};
	});*/

    ankAppServices.factory('utility', function(){
		return {
			contains : function(value1, value2)
            {
		      if(value1 === undefined || value2 === undefined)
              {
			     return false;
		      }
		      return value1.toLowerCase().indexOf(value2.toLowerCase()) != -1;
	       }
		};
	});