#!python3

import os
from pathlib import Path

prefix = "./routes/"
for d in os.scandir(prefix):
    path = d.name
    lastDot = path.rfind(".")
    path = path[:lastDot].replace(".", "/") + path[lastDot:]
    path = path.replace("_", "")

    with open(d.path) as file:
        text = file.read()

        path = prefix + path
        target = Path(path)
        print(path)
        target.parent.mkdir(0o775, True, True)
        with open(path, "x") as t:
            _ = t.write(text)



