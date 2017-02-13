'use strict';

/* Filters */

   /* angular.module('ankAppFilters', []).filter('checkmark', function() {
      return function(input) {
        return input ? '\u2713' : '\u2718';
      };
    });*/

   var ankAppFilters = angular.module('ankAppFilters', []);

    ankAppFilters.filter('skillsFilter', function($filter, utility) {
      return function(skills, query, category){
			var filteredSkills = $filter('filter')(skills, query);

			// if the query corresponds to the title and the filtered skills are empty, we return all the skills
			if(utility.contains(category, query) && filteredSkills.length == 0){
				return skills;
			}
			return filteredSkills;
		};
    });

    ankAppFilters.filter('join', function(){
    return function(input, delimiter) {
        input = input || []; //If input is not defined, define it
        delimiter = delimiter || ", ";
        return input.join(delimiter);
    };
    });
