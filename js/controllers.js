'use strict';

/* Controllers */
var ankAppControllers = angular.module('ankAppControllers', ['ui.bootstrap']);

/*Landing Page Controller */
 ankAppControllers.controller('homePageCtrl', function($scope, $http) {
     $scope.pageClass = 'page-home';
     $http.get('data/carousel.json').success(function(data) {
         $scope.carouselImages = data;
     });
     $scope.myInterval = 2600;
  }); 


/*About Page Controller */
 ankAppControllers.controller('aboutCtrl', function($scope){
    $scope.pageInfo = 'About controller working!!!';
    $scope.pageClass = 'page-about';
    });


/*Profile Page Controller */
  ankAppControllers.controller('ProfileCtrl', function($scope, $http,utility){
     $scope.pageInfo = 'Profile controller working!!!';
     $scope.pageClass = 'page-profile';      
     $http.get('data/skills.json').success(function(data) {
         $scope.skills = data;
     });
		
      
    });

/*Profile Page Controller */
  ankAppControllers.controller('revengeCtrl', function($scope, $http){
    
      $scope.pageInfo = 'contact controller working!!!';
      $scope.pageClass = 'page-contact';
      $scope.formData = {
      };
       
        // process the form
        $scope.processForm = function(isValid) {
           
            $scope.submitted = true;
            if(isValid)
            {
                /* {name:$scope.formData.name,
                        email:$scope.formData.email,
                        message:$scope.formData.message
                       } ) */
                
                 $http.post('./bin/fuck_netmeds.php', $scope.formData)                      
                    .success(function(data) {
                    console.log(data);   
                      $scope.message='Thanks for connecting with me. Your message has been received successfully.';
                      $scope.formData.name='';
                      $scope.formData.email='';
                      $scope.formData.message='';
                      $scope.contactForm.name.$pristine = true;
                      $scope.contactForm.email.$pristine = true;
                      $scope.contactForm.message.$pristine = true;
                });
            }
            else{
                $scope.contactForm.submitted  = true;
                $scope.contactForm.name.$pristine = false;
                $scope.contactForm.email.$pristine = false;
                $scope.contactForm.message.$pristine = false;
             
            }
        };
     
    });
 
/*Contact Page Controller */
  ankAppControllers.controller('contactCtrl', function($scope,$http){
      $scope.pageInfo = 'contact controller working!!!';
      $scope.pageClass = 'page-contact';
      $scope.formData = {
      };
       
        // process the form
        $scope.processForm = function(isValid) {
           
            $scope.submitted = true;
            if(isValid)
            {
                /* {name:$scope.formData.name,
                        email:$scope.formData.email,
                        message:$scope.formData.message
                       } ) */
                
                 $http.post('./bin/contact_me.php', $scope.formData)                      
                    .success(function(data) {
                    console.log(data);
                      $scope.message='Thanks for connecting with me. Your message has been received successfully.';
                      $scope.formData.name='';
                      $scope.formData.email='';
                      $scope.formData.message='';
                      $scope.contactForm.name.$pristine = true;
                      $scope.contactForm.email.$pristine = true;
                      $scope.contactForm.message.$pristine = true;
   
                });
            }
            else{
                $scope.contactForm.submitted  = true;
                $scope.contactForm.name.$pristine = false;
                $scope.contactForm.email.$pristine = false;
                $scope.contactForm.message.$pristine = false;
             
            }
        };

    });
