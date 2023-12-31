#!/usr/bin/env python3
""" Update pymongo records module """
import pymongo


def update_topics(mongo_collection, name, topics):
    """ Function that updates a record (document) using the record key (name),
    the record values (topics) and the table name (mongo_collection)"""
    filter = {"name": name}
    new_record = {"$set": {'topics': topics}}

    mongo_collection.update_many(filter, new_record)
