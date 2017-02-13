

/* Controllers */
var ankAppDirectives = angular.module('ankAppDirectives', []);

    
    //  a delimiter to the end of the list items. This is
		// designed to be used in conjunction with ngRepeat. It will
		// add the delimiter to all list items; but it will only show
		// on all but the $last ngRepeat item.
    
    ankAppDirectives.directive("ankRepeatDelimiter",function() {
        // I compile the list, injecting in the conditionally
        // visible delimiter onto the end of the template.
        function compile( element, attributes ) {
            
            // Get the delimiter that goes between each item.
            var delimiter = ( attributes.bnRepeatDelimiter || "," );
            
            // The delimiter will show on all BUT the last
            // item in the list.
            var delimiterHtml = (
                "<span ng-show=' ! $last '>" +
                delimiter +
                "</span>"
            );
            
            // Add the delimiter to the end of the list item,
            // making sure to add the existing whitespace back
            // in after the delimiter.
            var html = element.html().replace(
                /(\s*$)/i,
                function( whitespace ) {
                    
                    return( delimiterHtml + whitespace );
                        
                }
            );
            
            // Update the compiled HTML.
            element.html( html );

        }
            
        // Return the directive configuration. Notice that
        // our priority is 1 higher than ngRepeat - this will
        // be compiled before the ngRepeat compiles.
        return({
            compile: compile,
            priority: 1001,
            restirct: "A"
        });
    }
    );

    /**
    *** FIX for angular UI carousel and ng-animate intergration bug.
    */
    // version 1
    ankAppDirectives.directive('disableAnimation', function($animate){
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs){
                $attrs.$observe('disableAnimation', function(value){
                    $animate.enabled(!value, $element);
                });
            }
        }
    });
    // version 2    
    ankAppDirectives.directive('disableNgAnimate', function($animate) {
          return {
            restrict: 'A',
            link: function(scope, element) {
              $animate.enabled(false, element);
            }
          };
        });
