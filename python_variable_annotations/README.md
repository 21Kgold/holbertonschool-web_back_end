Learning Objectives
Type annotations in Python 3
How you can use type annotations to specify function signatures and variable types
Duck typing
How to validate your code with mypy

To write a typed function in Python, you can use type hints, which provide information about the expected types of the function's parameters and return value. Type hints are annotations added to the function's signature using the : syntax.

It's worth noting that type annotations in Python are optional and do not affect the runtime behavior of the code. However, they provide valuable information for static analysis tools and improve code readability and maintainability.

The typing module in Python is a standard library introduced in Python 3.5 that provides support for adding type hints to your code. Here are some key features and concepts of the typing module:

Type Annotations: The typing module allows you to annotate function arguments, return values, and variables with type hints. This provides additional information about the expected types of the values.

Generics: The typing module supports generic types, allowing you to create reusable type hints that can work with different specific types. For example, List[int] represents a list of integers.

Union Types: With the typing module, you can indicate that a variable can have multiple possible types using the Union type. For example, Union[int, float] represents a variable that can be either an integer or a float.

Optional Types: The Optional type is used to indicate that a variable can be of a specific type or None. It is essentially shorthand for Union[type, None].

Type Aliases: The typing module allows you to create aliases for complex types using the TypeAlias feature. This can make your type hints more readable and maintainable.

Protocol: The typing module introduced the concept of protocols, which are interfaces that define a set of methods that a class should implement. Protocols enable static duck typing, allowing you to specify that a class should have certain methods without explicitly inheriting from a specific base class.

Callable:  is used to indicate that an object is callable, meaning it can be called as a function. It is a generic type that can take type arguments to specify the types of the function's arguments and return value. The syntax for using Callable is Callable[[arg1_type, arg2_type, ...], return_type], where arg1_type, arg2_type, etc. represent the types of the arguments the function expects, and return_type represents the type of the value the function returns.

Iterable: represents objects that can be iterated over using a for loop. It is a generic type that can be parameterized with the type of the items in the iterable.

Sequence: represents objects that are sequences. Sequences are a type of iterable that have a specific set of features, such as being indexed, having a length, and supporting slicing. Common examples of sequences include lists, tuples, and strings.

A lambda function is a small anonymous function.

A lambda function can take any number of arguments, but can only have one expression.
Syntax
lambda arguments : expression

Duck typing is a concept in Python that focuses on the behavior of an object rather than its specific type. The idea behind duck typing is that if an object walks like a duck and quacks like a duck, then it is treated as a duck, regardless of its actual type.

In Python, duck typing allows you to use an object based on what it can do, rather than what it is. Instead of explicitly checking the type of an object, you check for the presence of specific methods or attributes that you expect the object to have.

