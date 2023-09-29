#!/usr/bin/env python3
""" BaseCaching module
"""


class BaseCaching():
    """ BaseCaching defines:
      - constants of your caching system
      - where your data are stored (in a dictionary)
    """
    MAX_ITEMS = 4     # maximum number of items that can be stored in the cache

    def __init__(self):
        """ Initiliaze
        """
        self.cache_data = {}             # dictionary to store the cached items

    def print_cache(self):
        """
        It iterates over the keys of the cache_data dictionary,
        sorts them, and prints each key-value pair.
        """
        print("Current cache:")
        for key in sorted(self.cache_data.keys()):
            print("{}: {}".format(key, self.cache_data.get(key)))

    def put(self, key, item):
        """ Add an item in the cache
        """
        raise NotImplementedError("put must be implemented in your \
                                   cache class")

    def get(self, key):
        """ Get an item by key
        """
        raise NotImplementedError("get must be implemented in your \
                                   cache class")
