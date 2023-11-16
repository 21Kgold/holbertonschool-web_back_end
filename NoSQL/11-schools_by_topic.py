#!/usr/bin/env python3
""" Search collections by topic module """
import pymongo


def schools_by_topic(mongo_collection, topic):
    """ Search collections by topic function """
    collection_list = []
    filter = {"topics": topic}
    for collection in mongo_collection.find(filter):
        collection_list.append(collection)
    return collection_list
