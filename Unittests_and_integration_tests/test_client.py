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
            payload = {'login': 'github', 'id': 9919, 'repos_url':
                       'https://api.github.com/orgs/github/repos'}
            mock.return_value = payload
            client1 = GithubOrgClient("github")
            public_repos_url = client1._public_repos_url
            self.assertEqual(public_repos_url, payload["repos_url"])

    @patch('client.get_json')
    def test_public_repos(self, mock_json):
        """Test the public_repos method"""
        payload_json = [{'login': 'github', 'id': 9919, 'repos_url':
                        'https://api.github.com/orgs/github/repos',
                         'name': 'GitHub'}]
        mock_json.return_value = payload_json
        with patch('client.GithubOrgClient._public_repos_url',
                   new_callable=PropertyMock) as mock_repos_url:
            mock_repos_url.return_value = payload_json[0]['repos_url']
            client1 = GithubOrgClient("github")
            public_repos = client1.public_repos()  # ['GitHub']
            expected = [repo["name"] for repo in payload_json]  # ['GitHub']

            self.assertEqual(public_repos, expected)
            mock_repos_url.assert_called_once()
            mock_json.assert_called_once()

    @parameterized.expand([
        ({"license": {"key": "my_license"}}, "my_license", True),
        ({"license": {"key": "other_license"}}, "my_license", False)
    ])
    def test_has_license(self, repo, license_key, expected):
        """Test for has_license method"""
        has_license = GithubOrgClient.has_license(repo, license_key)
        self.assertEqual(has_license, expected)
