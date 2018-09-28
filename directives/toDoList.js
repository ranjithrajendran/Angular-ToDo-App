angular.module('toDoApp').directive('toDolist', () => {
    return {
        restrict: 'E',
        templateUrl: '/toDoList.html'
    }
});