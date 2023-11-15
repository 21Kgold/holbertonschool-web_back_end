#!/usr/bin/env python3
""" List collections module """
import pymongo


def list_all(mongo_collection):
    mongo_documents = []
    for mongo_document in pymongo.find(mongo_collection)
        mongo_documents.append(mongo_document)
    return mongo_documents
