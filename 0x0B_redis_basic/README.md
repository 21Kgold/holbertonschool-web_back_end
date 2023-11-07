# Redis basic

## Description

[Redis](https://redis.io/docs/about/) is an open-source, in-memory data structure store that is used for various purposes such as a database, cache, message broker, and streaming engine. Depending on your use case, Redis can persist data either by periodically dumping the dataset to disk or by appending each command to a disk-based log. Redis also supports asynchronous replication, transactions, pub/sub messaging, Lua scripting, and automatic failover.

To install the Redis server on a system running Ubuntu or a Debian-based Linux distribution:
```
$ sudo apt-get -y install redis-server
```

A [Redis Python client](https://realpython.com/python-redis/) is a library that allows Python applications to interact with a Redis database.  One popular Redis Python client is [redis-py](https://redis-py.readthedocs.io/en/stable/). It is the official Python interface to the Redis key-value store and is actively maintained.

To use redis-py, you need to install it using pip:
```
$ pip install redis
```

In this project we explore the following concepts:
* Use redis for [basic operations](https://www.youtube.com/watch?v=Hbt56gFj998)
* Use redis as a simple cache
---

### [0. Writing strings to Redis](./exercise.py)

* Create a Cache class. In the __init__ method, store an instance of the Redis client as a private variable named _redis (using redis.Redis()) and flush the instance using flushdb.
* Create a store method that takes a data argument and returns a string. The method should generate a random key (e.g. using uuid), store the input data in Redis using the random key and return the key.
```
$ ./0-main.py 
bbbc386a-de9e-40a4-ae34-0e813ac54613
b'hello'
fd9e333e-768a-481c-8d1c-3fea4702771c
b'world'
```
Redis only allows to store string, bytes and numbers (and lists thereof). Whatever you store as single elements, it will be returned as a byte string. Hence if you store "world" as a UTF-8 string, it will be returned as b'world' when retrieved from the server.

### [1. Reading from Redis and recovering original type](./exercise.py)

* Create a get method that takes a string argument and an optional Callable argument named fn. The callable will convert the data back to the desired format.
* Conserve the original [Redis.get](https://redis.io/commands/get/) behavior if the key does not exist.
* Also create two aditional methods: get_str and get_int that make the conversion from bit to string or int of data.
```
$ ./1-main.py

```
When 1-main.py is run, it most not rise an AssertionError exception.

### [2. Incrementing values](./exercise.py)
Decorators provide a way to modify the behavior of a function or class by wrapping them with another function.

* To implement a system to count how many times a method of the Cache class is called, we can decorate it.
* Create a `@count_calls()` decorator function that takes a single `method()` Callable argument and returns a Callable. Use the decorator factory [@functoools.wraps](https://docs.python.org/3.7/library/functools.html#functools.wraps) sintax. @wraps decorator from the functools module, ensures that the wrapper function has the same name and attributes as the original method being decorated.
* Use the key, of [__qualname__](https://peps.python.org/pep-3155/#proposal) attribute of `method()` as a counter.
* The `wrapper()` function should increment the key (counter) every time the method() is called and returns the value returned by the original method or in other words, calls the original function method() with the provided arguments and keyword arguments.
* Decorate the store() method.
```
$ ./2-main.py
Instance of Cache() was created
b'1'
b'3'
b'4'
Instance of Cache() was created
b'1'
b'2'
```

### [3. Storing lists](./exercise.py)

* Create a `call_history()` decorator to store the history of inputs and outputs for a particular function. Everytime the original function will be called, we will add its input parameters to one list in redis, and store its output into another list.
* In call_history, use the decorated function’s qualified name and append ":inputs" and ":outputs" to create input and output list keys, respectively.
* Decorate Cache.store with call_history.
```
$ ./3-main.py 
9984f72f-f5e1-408b-9588-ac4007b4b48a
b4c4f92e-242f-4242-8b79-397df21b8b4e
99e1d699-9ecc-460b-b866-30203dd8f07c
inputs: [b"('first',)", b"('second',)", b"('third',)"]
outputs: [b'9984f72f-f5e1-408b-9588-ac4007b4b48a', b'b4c4f92e-242f-4242-8b79-397df21b8b4e', b'99e1d699-9ecc-460b-b866-30203dd8f07c']
```

### [4. Retrieving lists](./exercise.py)

* Implement a replay function to display the history of calls of a particular function. Use keys generated in previous tasks to generate the following output:
```
$ ./4-main.py 
Cache.store was called 3 times:
Cache.store(*('foo',)) -> 9cc3b644-ef07-4509-b4c6-5589031c0a38
Cache.store(*('bar',)) -> 846c18ab-3d80-49ba-a289-5633e6cbb535
Cache.store(*(42,)) -> db95d0a9-17d4-462c-bd9d-7c4a95683e64
```