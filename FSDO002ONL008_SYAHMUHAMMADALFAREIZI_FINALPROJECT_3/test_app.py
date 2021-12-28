from app import connex_app
import unittest
import json


class MyTestCase(unittest.TestCase):

    def test_getallmovies(self):
        tester = connex_app.app.test_client(self)
        response = tester.get(
            'https://h8ocbc2-milestone1-008.herokuapp.com/api/movies')
        statuscode = response.status_code
        self.assertEqual(statuscode, 200)

    def test_getmostpopularmvoies(self):
        tester = connex_app.app.test_client(self)
        response = tester.get(
            'https://h8ocbc2-milestone1-008.herokuapp.com/api/movies/mostpopular')
        statuscode = response.status_code
        self.assertEqual(statuscode, 200)

    def test_directors(self):
        tester = connex_app.app.test_client(self)
        response = tester.get(
            'https://h8ocbc2-milestone1-008.herokuapp.com/api/directors')
        statuscode = response.status_code
        self.assertEqual(statuscode, 200)

    def test_directorsbyname(self):
        tester = connex_app.app.test_client(self)
        response = tester.get(
            'https://h8ocbc2-milestone1-008.herokuapp.com/api/directors/james')
        statuscode = response.status_code
        self.assertEqual(statuscode, 200)


if __name__ == '__main__':
    unittest.main()
