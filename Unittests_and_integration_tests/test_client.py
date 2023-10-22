#!/usr/bin/env python3
"""client Module"""

from client import GithubOrgClient
import unittest
from unittest.mock import patch, PropertyMock
from parameterized import parameterized, parameterized_class
from fixtures import TEST_PAYLOAD


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


@parameterized_class(
    ("org_payload", "repos_payload", "expected_repos", "apache2_repos"),
    TEST_PAYLOAD
)
class TestIntegrationGithubOrgClient(unittest.TestCase):
    """ Integration test class"""

    @classmethod
    def setUpClass(cls):
        """ A class method called before tests"""
        conf = {'return_value.json.side_effect':
                [
                    cls.org_payload, cls.repos_payload,
                    cls.org_payload, cls.repos_payload
                ]
                }
        cls.get_patcher = patch('requests.get', **conf)

        cls.mock = cls.get_patcher.start()

    def test_public_repos(self):
        """ More integration """
        test_class = GithubOrgClient("google")

        self.assertEqual(test_class.org, self.org_payload)
        self.assertEqual(test_class.repos_payload, self.repos_payload)
        self.assertEqual(test_class.public_repos(), self.expected_repos)
        self.assertEqual(test_class.public_repos("XLICENSE"), [])
        self.mock.assert_called()

    def test_public_repos_with_license(self):
        """ Rrepos with license """
        test_class = GithubOrgClient("google")

        self.assertEqual(test_class.public_repos(), self.expected_repos)
        self.assertEqual(test_class.public_repos("XLICENSE"), [])
        self.assertEqual(test_class.public_repos(
            "apache-2.0"), self.apache2_repos)
        self.mock.assert_called()

    @classmethod
    def tearDownClass(cls):
        """ A class method called after tests """
        cls.get_patcher.stop()
