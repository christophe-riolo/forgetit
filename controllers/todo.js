var app = angular.module("todo", [])


function sort_by(type) {
    switch(type) {
        case "priority" : return (a,b) => {
            if (a.priority && b.priority)
                // We have to sort in reverse alphabetical order.
                return -cSort(a.priority, b.priority)
            else if (b.priority)
                return -1
            else
                return 0;
        };
        case "start_date":  return (a,b) => cSort(a.start_date, b.start_date);
        case "end_date":    return (a,b) => cSort(a.end_date, b.end_date);
        case "description": return (a,b) => cSort(a.description, b.description);
        case "line":        return (a,b) => cSort(a.line, b.line);
        case "completed":   return (a,b) => cSort(a.completed, b.completed);
        case "contexts":    return (a,b) => cSort(a.contexts.sort(cSort), b.contexts.sort(cSort));
        case "projects":    return (a,b) => cSort(a.projects.sort(cSort), b.projects.sort(cSort));
        default:            return (a,b) => cSort(a.text, b.text);
    }
}


app.controller("list", 
    function($scope, $http) {
        // Regular expressions to analyze the todo entries
        var r_todo = /^\s*(x )?\s*(\([A-Z]\) )?\s*((?:\d{4}-\d{2}-\d{2} ){0,2})\s*(.*)?$/;
        var r_date = /\d{4}-\d{2}-\d{2}/g;
        var r_context = /@\w+/g;
        var r_project = /\+\w+/g;

        //getting a default compare function for strings
        cSort = (new Intl.Collator(undefined, {numeric:true})).compare

        // Sorting functor.


        $http.get("http://127.0.0.1:5000/todo")
            .then(function(res) {
                $scope.todo_list = res.data;
            })
    }
);

app.filter('sort_by', function() {
    return function(input, type) {
        type = type || "text";
        sorting = sort_by(type);
        input.sort(sorting);
        return input;
    }
});
