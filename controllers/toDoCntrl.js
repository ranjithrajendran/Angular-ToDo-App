angular.module('toDoApp')
    .controller('toDoCntrl', ($scope) => {
        $scope.todoList = [{
            todoText: 'To create an Angular app',
            done: false
        }];

        $scope.todoAdd = () => {
            $scope.todoList.push({
                todoText: $scope.todoInput,
                done: false
            });
            $scope.todoInput = "";
        };

        $scope.remove = () => {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, (x) => {
                if (!x.done) $scope.todoList.push(x);
            });
        };
    });