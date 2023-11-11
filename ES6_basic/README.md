# ES6 Basics

## Description
ES6 is the sixth version of the ECMAScript programming language. ECMAScript is the standardized name for JavaScript, and ES6 is a major enhancement to the JavaScript language. It was published in 2015 and introduced several new features and improvements to make JavaScript code more modern, readable, and efficient.

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
* package.json
* babel.config.js
* .eslintrc.js

Finally, run `npm install` from the terminal of your project folder to install all necessary project dependencies.

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

* Check setup by modifying:
    - function taskFirst to instantiate variables using const
    - function taskNext to instantiate variables using let
```
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

```
$ npx eslint 0-constants.js && npx jest --transform babel-jest
$ npx eslint --fix 0-constants.js

$ npm run dev 0-main.js

> @ dev /mnt/c/Users/cau_r/Github/holbertonschool-web_back_end/ES6_basic
> npx babel-node "0-main.js"

I prefer const when I can. But sometimes let is okay
```

### [1. Block Scope](1-block-scoped.js)

* Modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block. Find a way to comply with eslint.
```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

```
$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
```

### [2. Arrow functions](2-arrow.js)

* Transform the given ES5 to ES6 arrow function.

```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```
```
$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
```

### [3. Parameter defaults](3-default-parameter.js)

* Condense the internals of the following function to 1 line - without changing the name of each function/variable.

```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```
```
$ npm run dev 3-main.js
142
56
41
```

### [4. Rest parameter syntax for functions](4-rest-parameter.js)

* Create a function that returns the number of arguments passed to it using the rest parameter syntax.

```
export default function returnHowManyArguments() {
}
```

```
$ npm run dev 4-main.js
1
4
```

### [5. The wonders of spread syntax](5-spread-operator.js)

* Using spread syntax, concatenate 2 arrays and each character of a string.
```
export default function concatArrays(array1, array2, string) {
}
```

```
$ npm run dev 5-main.js
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
```

### [6. Take advantage of template literals](6-string-interpolation.js)

* Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

```
$ npm run dev 6-main.js
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
```

### [7. Object property value shorthand syntax](7-getBudgetObject.js)

* Modify the following function’s budget object to simply use the keyname instead.

```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

```
$ npm run dev 7-main.js
{ income: 400, gdp: 700, capita: 900 }
```

### [8. No need to create empty objects before adding in properties](8-getBudgetCurrentYear.js)

* Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

```
$ npm run dev 8-main.js
{ 'income-2023': 2100, 'gdp-2023': 5200, 'capita-2023': 1090 }
```

### [9. ES6 method properties](9-getFullBudget.js)

* Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object
```
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

```
$ npm run dev 9-main.js
$20
20 euros
```

### [10. For...of Loops](10-loops.js)

* Rewrite the function appendToEachArrayValue to use ES6’s for...of operator
```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

```
$ npm run dev 10-main.js
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
```

### [11. Iterator](11-createEmployeesObject.js)

* Write a function named createEmployeesObject that will receive two arguments: departmentName (String) and employees (Array of Strings).
```
export default function createEmployeesObject(departmentName, employees) {
}
```

```
$ npm run dev 11-main.js
{ Software: [ 'Bob', 'Sylvie' ] }
```

### [12. Let's create a report object](12-createReportObject.js)

* Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.

```
export default function createReportObject(employeesList) {
}
```

```
$ npm run dev 12-main.js
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
```