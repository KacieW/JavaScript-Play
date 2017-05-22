#### Point to AngularJS app: ng-app
We tell what part of the HTML contains the AngularJS app. 
  This done by adding the **ng-app** attribute to the **Root** HTML element of the AngularJS app.

#### View: ng-controller
ng-controller tells AngularJS what controller to use with this view. 
The controller function is registered in angular via the **angular.module(...).controller(...)** function call.
The **$scope** parameter passed to the controller function is the **model**. 

#### Modules *define* **AngularJS** app.
`var app = angular.module('ng-app(myApp)', []);`

**`ng-app`** defines the application.It tells the AngularJs compiler to treat **that** element as the root of the compilation.
#### Controllers control **AngularJS** app.
**`ng-controller`** defines the controller.

`app.controller('ng-controller(myCtrl)', function($scope){
  $scope.firstName = "a";
  $scope.lastName = 'b';
});`

#### `ng-model` binds values of AngularJS application data to HTML input controls

## Overview of Angularjs life cycle
- #### Bootstrap
  - First phase. It occurs when angularJs Javascript library is downloaded to the browser. Icluding initialize componenets, module, and any dependency injection.
- #### Compilation
  - Second phase. It is the HTML complilation stage. The static DOM is replaced with a Dynamic DOM.

  it includes two parts:
  - traversing the static DOM and collecting all the directives
  - linking the directives to the appropriate Javascript functionality in AngularJs builtin library or custom directive code. 
- #### Runtime
  - It exists until the user reloads or navigates away from a web page.
  - It is more efficient than traditional methods beacuse it compiles the DOM only once.
  
## Separation fo Responsibilities
- The **_View_** acts as the official presentation structure for the application.
- DOM manipulation, do it in build-in or custom directive Javascript code.
- Reusable tasks should implelemnt as **_Services_** and add to **_Modules_** using Dependency Injection.
- Scope should refelects the current state of the **_Model_**, and is the single sourse for data consumed by the view.
- **_Controller_** code only acts to augment the **_Scope_** data, no business logic.
- Do not define **_Controller_** globally.

#### Load angular.js as one of the last tags. it allows web page to load faster. 
