var ANK_REST = {};

(function($){
    
    ANK_REST.contains = function(value1, value2){
		if(value1 === undefined || value2 === undefined){
			return false;
		}
		return value1.toLowerCase().indexOf(value2.toLowerCase()) != -1;
	}
    
    // replace the parameters in the string by the values
	// values : Array [value1, value2, ... value n]
	// parameters in string : $1, $2, ... $n
	ANK_REST.replaceParameters = function(string, values){
		for (var i = 0; i < values.length; i++) {
			var parameterIndex = i+1;
			var parameter = '$' + parameterIndex;
			var value = values[i];
			string = string.replace(parameter, value);
		}
		return string;
	}
    
})(jQuery);    