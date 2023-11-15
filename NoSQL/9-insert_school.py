#!/usr/bin/env python3
""" pymongo insert module """
import pymongo

def insert_school(mongo_collection, **kwargs):
    """ Insert one document into a given collection based in kwargs """
    insertOneResultObject = mongo_collection.insert_one(kwargs)
    isertedIdProperty = insertOneResultObject.inserted_id
    return isertedIdProperty
