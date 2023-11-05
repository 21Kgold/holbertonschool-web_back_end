#!/usr/bin/env python3
"""
    String Redis
"""
from uuid import uuid4
from typing import Union
import redis


class Cache:
    """ Cashe class """

    def __init__(self):
        """ Cashe class Constructor """
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """ Function that stores the cashe key / data and returns the key """
        key = str(uuid4())
        self._redis.set(key, data)

        return key
