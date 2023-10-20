#!/usr/bin/env python3
""" test_utils module """

from utils import access_nested_map
import unittest
from parameterized import parameterized


class TestAccessNestedMap(unittest.TestCase):
    """ access_nested_map() testing subclass"""
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
        ({}, ("a",)),
        ({"a": 1}, ("a", "b")),
    ])
    def test_access_nested_map_exception(self, nested_map, path) -> str:
        """ Test access_nested_map using @parameterized decorator"""
        with self.assertRaises(KeyError):
            access_nested_map(nested_map, path)
