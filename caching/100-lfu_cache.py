#!/usr/bin/env python3
'''
100-lfu_cache.py Module
'''

from base_caching import BaseCaching
from collections import OrderedDict


class LFUCache(BaseCaching):
    '''
    LFUCache class inherits from BaseCaching and is a caching system
    '''
    def __init__(self):
        '''
        Executed when the LFUCache class is being initiated
        '''
        super().__init__()
        self.keysUse = {}
        self.keysOrder = []

    def put(self, key, item):
        '''
        Add key/item and removes least used and older used
        key/item if more than MAX_ITEMS are present
        '''
        if key is not None and item is not None:
            if key in self.keysOrder:
                self.keysOrder.remove(key)          # avoid duplicate key
                value = self.keysUse[key]
                self.keysUse.update({key: value + 1})
            else:
                self.keysUse.update({key: 1})
            self.cache_data.update({key: item})             # add key/item
            self.keysOrder.insert(0, key)      # add key,first item of list

        if len(self.cache_data) > self.MAX_ITEMS:
            leastUsedKey = self.keysOrder[-1]
            for i in self.keysOrder[-2::-1]:
                if i == self.keysOrder[0]:
                    break
                if self.keysUse[leastUsedKey] > self.keysUse[i]:
                    leastUsedKey = i
            self.cache_data.pop(leastUsedKey)  # remove key/item
            self.keysUse.pop(leastUsedKey)  # remove key/item
            print("DISCARD: " + leastUsedKey)
            self.keysOrder.remove(leastUsedKey)  # remove leastUsed key of list

    def get(self, key):
        '''
        Retrieve item linked to key if present and not None
        '''
        if key is not None and key in self.cache_data:
            self.keysOrder.pop(self.keysOrder.index(key))  # remove key
            self.keysOrder.insert(0, key)      # add key,first item of list
            value: int = self.keysUse[key]
            self.keysUse.update({key: value + 1})
            return self.cache_data.get(key)

        return None
