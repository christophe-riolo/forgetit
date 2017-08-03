var todo_list = [{'text': '(A) 2017-06-25 Programmer Buddhist Well Being +git +python +portfolio'}, {'text': '(A) 2017-06-26 Envoyer candidatures +linkedIn repeat:weekly'}, {'text': '(B) 2017-06-25 Apprendre tests unitaires +miseANiveau +python'}, {'text': '(C) 2017-06-25 Apprendre CSS3 +miseANiveau'}, {'text': '(C) 2017-06-25 Apprendre HTML5 +miseANiveau'}, {'text': '2017-06-25 Utiliser tests unitaires +miseANiveau +python +portfolio'}, {'text': 'x 2017-06-25 2017-06-25 Apprendre Angular +miseANiveau'}, {'text': '(A) 2017-06-29 Move database code out of model. @buddhistWellBeing +cleaning (write only on save/load)'}, {'text': '(B) 2017-06-29 Use views instead of widgets @buddhistWellBeing +optimizing'}, {'text': '(B) 2017-06-29 Use QTDesigner for the UI @buddhistWellBeing'}, {'text': 'Add logging instead of printing +cleaning @buddhistWellBeing'}, {'text': 'Commenting +cleaning @buddhistWellBeing'}, {'text': 'Move code out of main file +cleaning @buddhistWellBeing'}, {'text': '(B) 2017-07-06 Add context menu @buddhistWellBeing +diary'}, {'text': 'Add per user data folder @nextcloud'}, {'text': 'Add todo.txt plugin @nextcloud'}, {'text': '(A) 2017-06-25 Faire une application de todo.txt +angularJS +javascript +HTML +CSS @serveur'}, {'text': 'Add nextcloud option @todo.txt'}, {'text': '(C) Make the diary into a TreeModel where the diary entries are leaves of the weekdays @buddhistWellBeing'}]

function sort_by_priority(a,b) {
}

todo_list.sort()
for (n in todo_list) {
    console.log(todo_list[n].text);
}
