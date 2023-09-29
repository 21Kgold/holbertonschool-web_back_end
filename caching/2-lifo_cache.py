#!/usr/bin/env python3
'''
2-lifo_cache.py Module
'''

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    '''
    LIFOCache class inherits from BaseCaching and is a caching system
    '''
    def __init__(self):
        '''
        Executed when the LIFOCache class is being initiated
        '''
        super().__init__()
        self.activeKeys = []

    def put(self, key, item):
        '''
        Add key/item and removes last in key/item if more than
        MAX_ITEMS are present
        '''
        if key is not None and item is not None:
            self.cache_data.update({key: item})             # add key/item
            self.activeKeys.insert(0, key)      # add key,first item of list
        if len(self.cache_data) > self.MAX_ITEMS:
            self.cache_data.pop(self.activeKeys[1])        # remove key/item
            print("DISCARD: " + self.activeKeys[1])
            self.activeKeys.pop(1)            # remove key, second item of list

    def get(self, key):
        '''
        Retrieve item linked to key if present and not None
        '''
        if key is not None and key in self.cache_data:
            return self.cache_data.get(key)
        return None
