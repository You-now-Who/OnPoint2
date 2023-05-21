import json
import os

ideas = json.load(open(os.path.join(os.path.dirname(__file__), 'ideas.json'), 'r'))

def get_idea():
    a = []
    for i in list(ideas.keys()):
        a.append(ideas[i])
    return a