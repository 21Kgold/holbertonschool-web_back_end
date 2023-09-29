#!/usr/bin/env python3
'''
4-mru_cache.py Module
'''

from base_caching import BaseCaching


class MRUCache(BaseCaching):
    '''
    MRUCache class inherits from BaseCaching and is a caching system
    '''
    def __init__(self):
        '''
        Executed when the MRUCache class is being initiated
        '''
        super().__init__()
        self.activeKeys = []

    def put(self, key, item):
        '''
        Add key/item and removes least used key/item if more than
        MAX_ITEMS are present
        '''
        if key is not None and item is not None:
            if key in self.activeKeys:
                self.activeKeys.remove(key)
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
            self.activeKeys.pop(self.activeKeys.index(key))  # remove key
            self.activeKeys.insert(0, key)      # add key,first item of list
            return self.cache_data.get(key)
        return None
