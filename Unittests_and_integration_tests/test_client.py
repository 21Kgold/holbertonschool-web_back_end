#!/usr/bin/env python3
"""client Module"""

from client import GithubOrgClient
import unittest
from unittest.mock import patch
from parameterized import parameterized


class TestGithubOrgClient(unittest.TestCase):
    """class to test TestGithubOrgClient"""
    @parameterized.expand([
        ("google"),
        ("abc"),
    ])
    def test_org(self, org_name):
        """Test the org method"""
        with patch('client.get_json') as mock:
            client = GithubOrgClient(org_name)
            client.org()
            mock.assert_called_once()
