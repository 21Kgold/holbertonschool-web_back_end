#!/usr/bin/env python3
""" test_utils module """

from utils import access_nested_map, get_json, memoize
import unittest
from unittest.mock import patch
from parameterized import parameterized
import json


class TestAccessNestedMap(unittest.TestCase):
    """ access_nested_map() testing class"""
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, nested_map, path, expected) -> str:
        """ Test access_nested_map using @parameterized decorator"""
        result = access_nested_map(nested_map, path)
        self.assertEqual(result, expected)  # Ok, if both are equal

    @parameterized.expand([
        ({}, ("a",), 'a'),
        ({"a": 1}, ("a", "b"), 'b'),
    ])
    def test_access_nested_map_exception(self, nested_map, path, expected) \
            -> str:
        """ Test access_nested_map exception using @parameterized decorator
            and context manager"""
        # Catch the exception object in the error variable
        with self.assertRaises(KeyError) as error:
            access_nested_map(nested_map, path)
        # Using the .exception attribute, retrieve the exception object itself
        exception_object = error.exception
        self.assertEqual(repr(exception_object), f"KeyError('{expected}')")


class TestGetJson(unittest.TestCase):
    """get_json() testing class"""
    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False}),
    ])
    @patch("requests.get")
    # mock_request represents the requests.get function due to @patch decorator
    def test_get_json(self, test_url, test_payload, mock_request) -> str:
        """Test get_json() using unittest.mock.patch"""
        # Configure the mock object
        mock_request.return_value.json.return_value = test_payload
        # Create instance of the class beng tested
        request = get_json(test_url)
        self.assertEqual(request, test_payload)


class TestMemoize(unittest.TestCase):
    """Test subclass"""
    def test_memoize(self):
        """Test method of memoize()"""
        class TestClass:
            """Test class"""
            def a_method(self):
                """a_method"""
                return 42

            @memoize
            def a_property(self):
                """decorator"""
                return self.a_method()
        # mock object represents the a_method attribute in the TestClass
        with patch.object(TestClass, 'a_method') as mock:
            test_class = TestClass()
            test_class.a_property()
            test_class.a_property()
            # check the mocked method has been called exactly once
            mock.assert_called_once()
