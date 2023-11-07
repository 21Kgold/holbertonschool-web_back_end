#!/usr/bin/env python3
""" Main file """

Cache = __import__('test').Cache

cache1 = Cache()
print('Instance of Cache() was created')
cache1.store(b"first")
print(cache1.get(cache1.store.__qualname__))

cache1.store(b"second")
cache1.store(b"third")
print(cache1.get(cache1.store.__qualname__))

key = cache1.store(b"fourth")
print(cache1.get(cache1.store.__qualname__))

cache2 = Cache()
print('Instance of Cache() was created')
cache2.store(b"hello")
print(cache2.get(cache2.store.__qualname__))

key = cache2.store(b"world")
print(cache2.get(cache2.store.__qualname__))