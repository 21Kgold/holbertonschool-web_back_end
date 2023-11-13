```
$ python3 --version
Python 3.7.3

$ mongo --version
MongoDB shell version v4.2.19
git version: e68a7d47305e14e090cba9ce3d92533053299996
OpenSSL version: OpenSSL 1.1.1  11 Sep 2018
allocator: tcmalloc
modules: none
build environment:
    distmod: ubuntu1804
    distarch: x86_64
    target_arch: x86_64

$ pip freeze | grep pymongo
pymongo==4.0.2

$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 18.04.6 LTS
Release:        18.04
Codename:       bionic
```

```
root@9a831df297d4:/NoSQL# service mongod start
 * Starting database mongod                                                                                                                                                                   [ OK ]
root@9a831df297d4:/NoSQL# cat 0-list_databases | mongo
MongoDB shell version v4.2.19
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("bc47b935-33da-4403-87f3-40e3bfcb694d") }
MongoDB server version: 4.2.19
admin   0.000GB
config  0.000GB
local   0.000GB
bye
root@9a831df297d4:/NoSQL#

```

```



```

