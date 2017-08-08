#!/usr/bin/env python3
"""Opens a todo.txt file and sends it as JSON.

When the module is used as standalone, opens REST webserver for communication.
"""

import os.path
import json
import re


r_todo = re.compile(
    r"""
    ^\s* # Line might start with blanks
    (x\ )?\s* # Completed ?
    (\([A-Z]\)\ )?\s* # Priority ?
    ((?:\d{4}-\d{2}-\d{2}\ ){0,2})\s* # Completed and creation dates ?
    (.*)$ # Description
    """, re.VERBOSE)
r_date = re.compile(r"\d{4}-\d{2}-\d{2}")
r_context = re.compile(r"@\w+")
r_project = re.compile(r"\+\w+")


def parse_todo_entry(entry, line):
    """Parses a single todo entry to extract a dictionnary
    of the data contained.
    """
    # Matching the whole entry
    m = r_todo.match(entry)

    # The dates are trickier because the first one found
    # is either the end date or the start date, depending
    # if there one or two dates.
    return {
         "line": line,
         "text": m[0].strip(),
         "completed": bool(m[1]),
         "priority": m[2],
         "end_date": (
             r_date.match(m[3])[0]
             if m[3] and len(r_date.findall(m[3])) >= 2
             else None),
         "start_date": (
             r_date.findall(m[3])[1]
             if m[3] and len(r_date.findall(m[3])) >= 2
             else r_date.findall(m[3])[0]
             if m[3] and len(r_date.findall(m[3])) == 1
             else None),
         "contexts": r_context.findall(m[4]),
         "projects": r_project.findall(m[4])
         }


def parse_todo(todo):
    """Parses a stream that follows todo.txt syntax
    and makes it into list of dictionnaries.
    """
    return [parse_todo_entry(entry, line)
            for line, entry in enumerate(todo.readlines())
            ]


def open_todo(user, credentials):
    """Checks the credentials and returns the todo file of user.
    """
    raise NotImplemented


if __name__ == "__main__":
    with open(os.path.expanduser("~/todo.txt")) as todo:
        print(repr(json.dumps(parse_todo(todo))))
