var todo_list = JSON.parse('[{"line": 0, "text": "x 2017-06-26 2017-06-25 Apprendre Angular +miseANiveau", "completed": true, "priority": null, "end_date": "2017-06-26", "start_date": "2017-06-25", "contexts": [], "projects": ["+miseANiveau"]}, {"line": 1, "text": "(A) 2017-06-25 Programmer Buddhist Well Being +git +python +portfolio", "completed": false, "priority": "(A) ", "end_date": null, "start_date": "2017-06-25", "contexts": [], "projects": ["+git", "+python", "+portfolio"]}, {"line": 2, "text": "(A) 2017-06-26 Envoyer candidatures +linkedIn repeat:weekly", "completed": false, "priority": "(A) ", "end_date": null, "start_date": "2017-06-26", "contexts": [], "projects": ["+linkedIn"]}, {"line": 3, "text": "(B) 2017-06-25 Apprendre tests unitaires +miseANiveau +python", "completed": false, "priority": "(B) ", "end_date": null, "start_date": "2017-06-25", "contexts": [], "projects": ["+miseANiveau", "+python"]}, {"line": 4, "text": "(C) 2017-06-25 Apprendre CSS3 +miseANiveau", "completed": false, "priority": "(C) ", "end_date": null, "start_date": "2017-06-25", "contexts": [], "projects": ["+miseANiveau"]}, {"line": 5, "text": "(C) 2017-06-25 Apprendre HTML5 +miseANiveau", "completed": false, "priority": "(C) ", "end_date": null, "start_date": "2017-06-25", "contexts": [], "projects": ["+miseANiveau"]}, {"line": 6, "text": "2017-06-25 Utiliser tests unitaires +miseANiveau +python +portfolio", "completed": false, "priority": null, "end_date": null, "start_date": "2017-06-25", "contexts": [], "projects": ["+miseANiveau", "+python", "+portfolio"]}, {"line": 7, "text": "(A) 2017-06-29 Move database code out of model. @buddhistWellBeing +cleaning (write only on save/load)", "completed": false, "priority": "(A) ", "end_date": null, "start_date": "2017-06-29", "contexts": ["@buddhistWellBeing"], "projects": ["+cleaning"]}, {"line": 8, "text": "(B) 2017-06-29 Use views instead of widgets @buddhistWellBeing +optimizing", "completed": false, "priority": "(B) ", "end_date": null, "start_date": "2017-06-29", "contexts": ["@buddhistWellBeing"], "projects": ["+optimizing"]}, {"line": 9, "text": "(B) 2017-06-29 Use QTDesigner for the UI @buddhistWellBeing", "completed": false, "priority": "(B) ", "end_date": null, "start_date": "2017-06-29", "contexts": ["@buddhistWellBeing"], "projects": []}, {"line": 10, "text": "Add logging instead of printing +cleaning @buddhistWellBeing", "completed": false, "priority": null, "end_date": null, "start_date": null, "contexts": ["@buddhistWellBeing"], "projects": ["+cleaning"]}, {"line": 11, "text": "Commenting +cleaning @buddhistWellBeing", "completed": false, "priority": null, "end_date": null, "start_date": null, "contexts": ["@buddhistWellBeing"], "projects": ["+cleaning"]}, {"line": 12, "text": "Move code out of main file +cleaning @buddhistWellBeing", "completed": false, "priority": null, "end_date": null, "start_date": null, "contexts": ["@buddhistWellBeing"], "projects": ["+cleaning"]}, {"line": 13, "text": "(B) 2017-07-06 Add context menu @buddhistWellBeing +diary", "completed": false, "priority": "(B) ", "end_date": null, "start_date": "2017-07-06", "contexts": ["@buddhistWellBeing"], "projects": ["+diary"]}, {"line": 14, "text": "Add per user data folder @nextcloud", "completed": false, "priority": null, "end_date": null, "start_date": null, "contexts": ["@nextcloud"], "projects": []}, {"line": 15, "text": "Add todo.txt plugin @nextcloud", "completed": false, "priority": null, "end_date": null, "start_date": null, "contexts": ["@nextcloud"], "projects": []}, {"line": 16, "text": "(A) 2017-06-25 Faire une application de todo.txt +angularJS +javascript +HTML +CSS @serveur", "completed": false, "priority": "(A) ", "end_date": null, "start_date": "2017-06-25", "contexts": ["@serveur"], "projects": ["+angularJS", "+javascript", "+HTML", "+CSS"]}, {"line": 17, "text": "(A )Add nextcloud option @todo.txt", "completed": false, "priority": null, "end_date": null, "start_date": null, "contexts": ["@todo"], "projects": []}, {"line": 18, "text": "(C) Make the diary into a TreeModel where the diary entries are leaves of the weekdays @buddhistWellBeing", "completed": false, "priority": "(C) ", "end_date": null, "start_date": null, "contexts": ["@buddhistWellBeing"], "projects": []}]')


// Regular expressions to analyze the todo entries
var r_todo = /^\s*(x )?\s*(\([A-Z]\) )?\s*(\d{4}-\d{2}-\d{2} ){0,2}\s*(.*)?$/;
var r_date = /\d{4}-\d{2}-\d{2}/g;
var r_context = /@\w+/g;
var r_project = /\+\w+/g;

//getting a default compare function for strings
sort = (new Intl.Collator).compare

// Priority sorting function.
function sort_by_priority(a,b) {
    if (a.priority && b.priority)
        // We have to sort in reverse alphabetical order.
        return -sort(a.priority, b.priority)
    else if (b.priority)
        return -1
    else
        return 0;
}

todo_list.sort(sort_by_priority)
for (n in todo_list) {
    console.log(todo_list[n].text);
}
