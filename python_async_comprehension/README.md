Learning Objectives
How to write an asynchronous generator
How to use async comprehensions
How to type-annotate generators

yield keyword is used to create a generator function. A type of function that is memory efficient and can be used like an iterator object. The key benefit of using yield is that it allows you to generate values on the fly, without needing to store them all in memory at once. This can be particularly useful when dealing with large datasets.
Difference between return and yield Python
The yield keyword in Python is similar to a return statement used for returning values in Python which returns a generator object to the one who calls the function which contains yield, instead of simply returning a value. The main difference between them is, the return statement terminates the execution of the function. Whereas, the yield statement only pauses the execution of the function. Another difference is return statements are never executed. whereas, yield statements are executed when the function resumes its execution.

Advantages of yield:

Using yield keyword is highly memory efficient, since the execution happens only when the caller iterates over the object.
As the variables states are saved, we can pause and resume from the same point, thus saving time.
Disadvantages of yield: 

Sometimes it becomes hard to understand the flow of code due to multiple times of value return from the function generator.
Calling of generator functions must be handled properly, else might cause errors in program.