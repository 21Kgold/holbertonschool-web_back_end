#!/usr/bin/env python3
"""
    String Redis
"""
from uuid import uuid4
from typing import Union, Callable, Optional
from functools import wraps
import redis


def count_calls(method: Callable = None) -> Callable:
    """ Decorator to count how many times Cache class methods are called """
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ Wrapper method """
        self._redis.incr(key)
        return method(self, *args, **kwargs)

    return wrapper


def call_history(method: Callable) -> Callable:
    """ Decorator call history """

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ Wraper function """
        #  input arguments (args) are converted to a string
        input: str = str(args)
        self._redis.rpush(method.__qualname__ + ":inputs", input)

        output = str(method(self, *args, **kwargs))
        self._redis.rpush(method.__qualname__ + ":outputs", output)

        return output

    return wrapper


def replay(method: Callable):
    """ Replay function """
    redis_connection = redis.Redis()
    method_name = method.__qualname__
    number_calls = redis_connection.get(method_name)

    try:
        number_calls = number_calls.decode()
    except Exception:
        number_calls = 0

    print(f'{method_name} was called {number_calls} times:')

    input = redis_connection.lrange(method_name + ":inputs", 0, -1)
    output = redis_connection.lrange(method_name + ":outputs", 0, -1)

    for data, random_key in zip(input, output):
        try:
            data = data.decode()
        except Exception:
            data = ""
        try:
            random_key = random_key.decode()
        except Exception:
            random_key = ""

        print(f'{method_name}(*{data}) -> {random_key}')


class Cache:
    """ Cashe class """

    def __init__(self):
        """ Cache class Constructor that starts the connection to a Redis
        server. I also clears all the data from the Redis server """
        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """ Creates random key, stores key/data in _redis variable to the Redis
        server and returns the key """
        random_key = str(uuid4())
        self._redis.set(random_key, data)
        return random_key

    def get(self, key: str,
            fn: Optional[Callable] = None) -> Union[str, bytes, int, float]:
        """ Using key, retrieve data with original type """
        bit_data = self._redis.get(key)  # If key doesn't exist bit_data=None

        if fn:
            return fn(bit_data)

        return bit_data

    def get_str(self, key: str) -> str:
        """ bit to string conversion """
        bit_data = self._redis.get(key)
        string_data = bit_data.decode()
        return string_data

    def get_int(self, key: str) -> int:
        """ bit to integer conversion """
        bit_data = self._redis.get(key)
        try:
            int_data = int(bit_data.decode())
            return int_data
        except ValueError:
            return print("Error")
