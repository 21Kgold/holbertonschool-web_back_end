# ES6 data manipulation

## Description

* How to use isArray, map, filter and reduce on [arrays](https://www.w3schools.com/jsref/jsref_obj_array.asp)
* Typed arrays
* The [Set](https://www.w3schools.com/js/js_sets.asp), [Map](https://www.w3schools.com/js/js_maps.asp), and Weak link data structures

---

### [0. Basic list of objects](./0-get_list_students.js)

* Define a function called getListStudents that returns an array of objects representing students. Each object in the array represents a student and contains the given values for id, firstName, and location properties.
```
$ npm run dev 0-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
```

### [1. More mapping](./1-get_list_student_ids.js)

map() creates a new array from calling a function for every array element.

* Define a function called getListStudentIds that takes a list of objects as a parameter. The function returns an array containing the id property of each object in the input list.
* If the argument is not an array, the function is returning an empty array.
* You must use the map() method.

```
$ npm run dev 1-main.js
[]
[ 1, 2, 5 ]
```

### [2. Filter](./2-get_students_by_loc.js)

The filter() method creates a new array filled with elements that pass a test provided by a function.

* Define a getStudentsByLocation function, that takes two parameters: a list of objects and a location. The function must return an array of objects that have the matching location property. Use the filter() method.

```
$ npm run dev 2-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
```

### [3. Reduce](./3-get_ids_sum.js)

The reduce() method is a higher-order array method that iterates over each element of the array and accumulates a single value based on the provided callback function.

* Define getStudentIdsSum function, which takes an array of objects as parameter and calculates the sum of the id property values of the array of objects, returning the total sum. Use the reduce() method.
```
$ npm run dev 3-main.js
8
```

### [4. Combine](./4-update_grade_by_city.js)

* Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade.
* It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters. newGrades is an array of objects with this format:
```
  {
    studentId: 31,
    grade: 78,
  }
```
* If a student doesn’t have grade in newGrades, the final grade should be N/A.
* You must use filter and map combined.
```
$ npm run dev 4-main.js
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
```

### [5. Typed Arrays](./5-typed_arrays.js)

An ArrayBuffer is a fixed-length binary data buffer that can hold raw binary data. It provides a low-level representation of arbitrary data bytes. In this case, the ArrayBuffer is created with a specified length.

A DataView object provides a way to access and manipulate the data in an ArrayBuffer. It allows you to read and write values of different types (integers, floats, etc.) at specific positions within the ArrayBuffer.

* Define a createInt8TypedArray() function that creates a new ArrayBuffer, sets a Int8 value at a specific position within that ArrayBuffer, and returns the modified DataView object.
* It should accept three arguments: length (Number), position (Number), and value (Number).
```
$ npm run dev 5-main.js
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
```

### [6. Set data structure](./6-set.js)

* Create a function named setFromArray that returns a Set from an array. It acepts an array as argument.
```
$ npm run dev 6-main.js
Set { 12, 32, 15, 78, 98 }
```

### [7. More set data structure](./7-has_array_values.js)

* Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.
* It accepts two arguments: a set (Set) and an array (Array).

```
$ npm run dev 7-main.js
true
false
false
```

### [8. Clean set](./8-clean_set.js)

* Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).
* It accepts two arguments: a set (Set) and a startString (String).
* When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -.
```
$ npm run dev 8-main.js
jovi-aparte-appetit


test-chicken-user-id-
```

### [9. Map data structure](./9-groceries_list.js)

* Create a function named groceriesList that returns a map of groceries with the given items.
```
$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
```

### [10. More map data structure](./10-update_uniq_items.js)

* Create a function named groceriesList that returns a map of groceries with the given items.
```
$ npm run dev 10-main.js
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
```

### [11. WeakMap](./100-weak.js)

A WeakMap is a built-in JavaScript data structure that allows you to associate key-value pairs, similar to a regular Map. However, unlike a Map, the keys in a WeakMap are weakly referenced, which means that they do not prevent the garbage collector from removing the key-value pairs from memory if there are no other references to them.

* Create a queryAPI function that uses a WeakMap to keep track of the number of times an endpoint is queried. It throws an error if the number of queries for a specific endpoint exceeds a certain threshold (5 times).

```
$ npm run dev 100-main.js
1
2
...
    throw new Error('Endpoint load is high');
    ^
Error: Endpoint load is high
    ...
```