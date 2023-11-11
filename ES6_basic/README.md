# ES6 Basics

## Description


## Setup
$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 18.04.6 LTS
Release:        18.04
Codename:       bionic

Install NodeJS 12.11.x

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.22.12
$ npm -v
6.14.16

Install Jest, Babel, and ESLint
in your project directory:

Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
Install ESLint using: npm install --save-dev eslint

Include the configuration files:
package.json
babel.config.js
.eslintrc.js

Finally, run npm install from the terminal of your project folder to install all necessary project dependencies.

What ES6 is
New features introduced in ES6
The difference between a constant and a variable
Block-scoped variables
Arrow functions and function parameters default to them
Rest and spread function parameters
String templating in ES6
Object creation and their properties in ES6
Iterators and for-of loops

---

### [0. Const or let?](./0-constants.js)

* Modify
    - function taskFirst to instantiate variables using const
    - function taskNext to instantiate variables using let

### []()

* 
