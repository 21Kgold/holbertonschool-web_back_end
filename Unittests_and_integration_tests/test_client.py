#!/usr/bin/env python3
"""client Module"""

from client import GithubOrgClient
import unittest
from unittest.mock import patch, PropertyMock
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
            client.org
            mock.assert_called_once()

    def test_public_repos_url(self):
        """Test the public_repos_url method"""
        with patch('client.GithubOrgClient.org', new_callable=PropertyMock) \
                as mock:
            org_info = {'login': 'github', 'id': 9919, 'repos_url':
                        'https://api.github.com/orgs/github/repos'}
            mock.return_value = org_info
            client1 = GithubOrgClient("google")
            public_repos_url = client1._public_repos_url
            self.assertEqual(public_repos_url, org_info["repos_url"])
