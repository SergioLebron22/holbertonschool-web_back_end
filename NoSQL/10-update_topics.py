#!/usr/bin/env python3

"""This file contains the file update_topics"""


def update_topics(mongo_collection, name, topics):
    """updates the document"""
    mongo_collection.update_one(
        {"name": name},
        {"$set": {"topics": topics}}
    )
