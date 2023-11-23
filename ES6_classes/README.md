# ES6 classes

## Description

JavaScript Classes are templates for JavaScript Objects.
* [How to define a Class](https://www.w3schools.com/js/js_class_intro.asp)
* The two types of methods that can be defined in a class in JavaScript: static methods (associated with the class itself) and instance methods.
* Simulate abstract classes in JavaScript.
* How to extend a class from another
* Metaprogramming and symbols.

### [0. You used to attend a place like this at some point](./0-classroom.js)
* Define a ClassRoom class with a constructor that takes in a maxStudentsSize parameter. It assigns the value of maxStudentsSize to the _maxStudentsSize instance variable. The default value of maxStudentsSize is 0.

```
$ npm run dev 0-main.js
10
```

### [1. Let's make some classrooms](./1-make_classrooms.js)
* Import the ClassRoom class from another file and define a function called initializeRooms that creates and returns an array of ClassRoom objects with (19, 20, and 34) maxStudentsSize values.

```
$ npm run dev 1-main.js
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
```

### [2. A Course, Getters, and Setters](./2-hbtn_course.js)

* Define a HolbertonCourse class with a constructor that takes in name, length, and students parameters.
* Use the underscore prefix convention to indicate that _name, _length and _students are private variables.
* Also define getter and setter methods for these properties, ensuring that the properties are of the correct type (string for name, number for length, and array of strings for students).
```
$ npm run dev 2-main.js
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
```

### [3. Methods, static methods, computed methods names..... MONEY](./3-currency.js)

* Define a Currency class with a constructor that takes in code and name attributes.
* Also define getter and setter methods for these attributes, ensuring that the attributes are of the correct type (string).
* Additionally, define a method called displayFullCurrency that returns a string with the following format name (code).

```
$ npm run dev 3-main.js
Dollars ($)
```

### [4. Pricing](./4-pricing.js)

* Import class Currency from 3-currency.js.
* Define a class named Pricing with two constructor attributes:
    - amount (Number)
    - currency (Currency)
* Each attribute must be stored in an “underscore” attribute version. Implement a getter and setter for each attribute.
* Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
* Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.

```
$ npm run dev 4-main.js
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
```

### [5. A Building](./5-building.js)

* Implement a class named Building with attribute:
    - sqft (Number)
* Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name). Implement a getter for each attribute.
* Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
* If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage

```
$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
```

### [6. Inheritance](./6-sky_high.js)

* Import Building from 5-building.js and implement a class named SkyHighBuilding that extends from Building:
    - Constructor attributes:
        + sqft (Number) (must be assigned to the parent class Building)
        + floors (Number)
* Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name). Implement a getter for each attribute.
* Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.

```
$ npm run dev 6-main.js
140
60
Evacuate slowly the 60 floors
```

### [7. Airport](./7-airport.js)

* Implement a class named Airport:
    - Constructor attributes:
        + name (String)
        + code (String)
* Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
* The default string description of the class returns:
```
$ npm run dev 7-main.js 
Airport { _name: 'San Francisco Airport', _code: 'SFO' }
[object Object]
```
* Modify the default string description of the class method so it returns the airport code (example below):
```
$ npm run dev 7-main.js
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
```

### [8. Primitive - Holberton Class](./8-hbtn_class.js)

* Implement a class named HolbertonClass:
    - Constructor attributes:
        + size (Number)
        + location (String)
* Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
* When the class is cast into a Number, it should return the size.
* When the class is cast into a String, it should return the location.
```
$ npm run dev 8-main.js 
12
Mezzanine
```

### [9. Hoisting](./9-hoisting.js)

* Fix the given code and make it work.

```
$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
```