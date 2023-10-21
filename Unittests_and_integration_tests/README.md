# Unittests and Integration Tests

## Description

The [unittest](https://docs.python.org/3/library/unittest.html#module-unittest) unit testing framework supports test automation, sharing of setup and shutdown code for tests, aggregation of tests into collections, and independence of the tests from the reporting framework.

There is a way to test the implementation of a third-party API in a controlled environment without needing to actually connect to an outside data source. The solution is to fake the functionality of the external code using something known as mocks.

This project explores the following features:
* The difference between unit and integration tests.
* Common testing patterns such as [mocking](https://docs.python.org/3/library/unittest.mock.html), [parametrizations](https://pypi.org/project/parameterized/) and fixtures.

---

### [0. Parameterize a unit test](./test_utils.py)

* Create a sub class of `unittest.TestCase` named `TestAccessNestedMap`.
* Write a unit test for `access_nested_map()` as a method of `TestAccessNestedMap`, named `test_access_nested_map()` using `assertEqual()`.
* Decorate the method with `@parameterized.expand` for given cases.

### [1. Parameterize a unit test](./test_utils.py)

* Write a unit test for `access_nested_map()` as a method of `TestAccessNestedMap`, named `test_access_nested_map_exception()` using `assertRaises()` to test that a `KeyError` is raised. Use `@parameterized.expand` for given cases.

### [2. Mock HTTP calls](./test_utils.py)

* Define the `TestGetJson(unittest.TestCase)` class.
* Implement the `TestGetJson.test_get_json()` method to test that `utils.get_json()` returns the expected result.
* Use `unittest.mock.patch` to patch `requests.get`. Use `@parameterized.expand` for given cases.

