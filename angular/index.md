#### Point to AngularJS app: ng-app
We tell what part of the HTML contains the AngularJS app. 
  This done by adding the **ng-app** attribute to the **Root** HTML element of the AngularJS app.

#### View: ng-controller
ng-controller tells AngularJS what controller to use with this view. 
The controller function is registered in angular via the **angular.module(...).controller(...)** function call.
The **$scope** parameter passed to the controller function is the **model**. 

#### Modules *define* **AngularJS** app.
`var app = angular.module('ng-app(myApp)', []);`

**`ng-app`** defines the application.
#### Controllers control **AngularJS** app.
**`ng-controller`** defines the controller.

`app.controller('ng-controller(myCtrl)', function($scope){
  $scope.firstName = "a";
  $scope.lastName = 'b';
});`

#### `ng-model` binds values of AngularJS application data to HTML input controls
