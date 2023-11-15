#!/usr/bin/env python3
""" List collections module """
import pymongo


def list_all(mongo_collection):
    """Function that create a list of documents from given collection"""
    mongo_documents = []
    for mongo_document in mongo_collection.find():
        mongo_documents.append(mongo_document)
    return mongo_documents
