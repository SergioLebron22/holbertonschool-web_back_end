#!/usr/bin/env python3

"""This file contains the function schools_by_topic"""


def schools_by_topic(mongo_collection, topic):
    """returns a list"""
    return list(mongo_collection.find({"topic": topic}))
