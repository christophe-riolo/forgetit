"""Parses a todo.txt file into JSON readable by todo.js.

When the module is used as standalone, opens REST webserver for communication."""

import os.path

def parse_todo(todo):
    """Parses a stream that follows todo.txt syntax and makes it into a useful json.
    """
    raise NotImplemented


def open_todo(user, credentials):
    """Checks the credentials and returns the todo file of user.
    """
    raise NotImplemented


if __name__ == "__main__":
    with open(os.path.expanduser("~/todo.txt")) as todo:
        todo_list = [{"text": l.strip()} for l in todo]
        print(todo_list)
