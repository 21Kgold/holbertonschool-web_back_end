#!/usr/bin/env python3
""" Main file """
import redis

Cache = __import__('exercise').Cache

cache = Cache()

data = b"hello"
key = cache.store(data)
print(key)

local_redis = redis.Redis()
print(local_redis.get(key))

cache1 = Cache()

data = "world"
key = cache1.store(data)
print(key)

print(cache1.get(key))
print(cache1.get(data))
