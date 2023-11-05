# Redis basic

## Description

[Redis](https://redis.io/docs/about/) is an open-source, in-memory data structure store that is used for various purposes such as a database, cache, message broker, and streaming engine. Depending on your use case, Redis can persist data either by periodically dumping the dataset to disk or by appending each command to a disk-based log. Redis also supports asynchronous replication, transactions, pub/sub messaging, Lua scripting, and automatic failover.

To install the Redis server on a system running Ubuntu or a Debian-based Linux distribution:
```
$ sudo apt-get -y install redis-server
```

A Redis Python client is a library that allows Python applications to interact with a Redis database.  One popular Redis Python client is redis-py. It is the official Python interface to the Redis key-value store and is actively maintained.

To use redis-py, you need to install it using pip:
```
$ pip install redis
```

In this project we explore the following concepts:
* Use redis for basic operations
* Use redis as a simple cache
---

### [0. Writing strings to Redis](./exercise.py)

* Create a simple