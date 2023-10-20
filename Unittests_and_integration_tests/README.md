# Unittests and Integration Tests

## Description

The [unittest](https://docs.python.org/3/library/unittest.html#module-unittest) unit testing framework supports test automation, sharing of setup and shutdown code for tests, aggregation of tests into collections, and independence of the tests from the reporting framework.

This project explores the following features:
* The difference between unit and integration tests.
* Common testing patterns such as mocking, parametrizations and fixtures.

---

### [0. Parameterize a unit test](./test_utils.py)

Instances of the TestCase class represent the logical test units in the unittest universe. This class is intended to be used as a base class, with specific tests being implemented by concrete subclasses.

* Create a sub class of unittest.TestCase named TestAccessNestedMap.
* Write a unit test for [access_nested_map()](./utils.py) as a method of TestAccessNestedMap, named test_access_nested_map.
* Decorate the method 
