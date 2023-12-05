# Queuing System in JS

## Description

* How to run a Redis server on your machine
* How to run simple operations with the Redis client
* How to use a Redis client with Node JS for basic operations
* How to store hash values in Redis
* How to deal with async operations with Redis
* How to use Kue as a queue system
* How to build a basic Express app interacting with a Redis server
* How to the build a basic Express app interacting with a Redis server and queue

## Setup
```
$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 18.04.6 LTS
Release:        18.04
Codename:       bionic
```

Install NodeJS 12.11.x
```
$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs -y

$ nodejs -v
v12.22.12
$ npm -v
6.14.16
```

Install Jest, Babel, and ESLint in your project directory:
```
$ npm install --save-dev jest
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
$ npm install --save-dev eslint
```

Include the configuration files:
* [package.json](./package.json)
* [.babelrc](./.babelrc)
* [.eslintrc.js](./.eslintrc.js)

Finally, run `npm install` from the terminal of your project folder to install all necessary project dependencies.

The .babelrc file is a configuration file used by Babel, a JavaScript compiler. It allows you to specify various settings and options for Babel's transformation process. The file is typically placed in the root directory of your project.

It's important to note that the .babelrc file is just one way to configure Babel. Other options include using babel.config.js or specifying configuration directly in your build tool (e.g., webpack configuration).
---

### [0. Install a redis instance](./dump.rdb)

* Download, extract, and compile the latest stable Redis version
```
$ wget http://download.redis.io/releases/redis-6.0.10.tar.gz
$ tar xzf redis-6.0.10.tar.gz
$ cd redis-6.0.10
$ make
```
* Start Redis Server: Ensure that the Redis server is running on 127.0.0.1 at the specified port. The & at the command is used to run the Redis server process in the background, allowing it to continue running even after you close the terminal or session.
```
$ src/redis-server & --bind 127.0.0.1 --port [6379]
```
* Connect to Redis: Open a new terminal or command prompt and connect to the Redis server using the redis-cli command:
```
$ redis-cli -h 127.0.0.1 -p [6379]
```
* Set Key/Value Pair and verify Key/Value pair and end connection.
```
127.0.0.1:6379> SET Holberton School
OK
127.0.0.1:6379> GET Holberton
"School"
127.0.0.1:6379> quit
```
* Find the PID to kill the Redis server process.
```
$ ps -ef | grep redis-server
claudia  12775     9  0 00:01 pts/0    00:00:04 src/redis-server *:6379
$ kill 12775
12775:signal-handler (1701758420) Received SIGTERM scheduling shutdown...
$ ...
[1]+  Done                    src/redis-server
```


### [1. Node Redis Client](./0-redis_client.js)

* C

### [2. Node Redis client and basic operations](./1-redis_op.js)

* C

### [3. Node Redis client and async operations](./2-redis_op_async.js)

* C

### [4. Node Redis client and advanced operations](./4-redis_advanced_op.js)

* C

### [5. Node Redis client publisher and subscriber](./5-publisher.js)

* C

### [6. Create the Job creator](./6-job_creator.js)

* C

### [7. Create the Job processor](./6-job_processor.js)

* C

### [8. Track progress and errors with Kue: Create the Job creator](./7-job_creator.js)

* C

### [9. Track progress and errors with Kue: Create the Job processor](./7-job_processor.js)

* C

### [10. Writing the job creation function](./8-job.js)

* C

### [11. Writing the test for job creation](./8-job.test.js)

* C

### [12. In stock?](./9-stock.js)

* C