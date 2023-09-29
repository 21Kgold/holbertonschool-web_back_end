#!/usr/bin/env python3
'''
0-basic_cache Module
'''

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    '''
    BasicCache class inherits from BaseCaching and is a caching system
    '''
    def put(self, key, item):
        '''
        If key and item are not None, asign them to self.cache_data
        '''
        if key is not None and item is not None:
            self.cache_data.update({key: item})

    def get(self, key):
        '''
        Retrieve item linked to key if present and not None
        '''
        if key is not None and key in self.cache_data:
            return self.cache_data.get(key)
        return None
