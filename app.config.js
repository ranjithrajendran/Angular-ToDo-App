
angular.module('toDoApp')
.config(['$routeProvider',($routeProvider) => {
    $routeProvider
    .when('/', {
        template: '<to-doList></to-doList>'
    })
    .otherwise('/')
}]);