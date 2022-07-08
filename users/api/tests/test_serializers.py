import pytest
from django.test import TestCase
from mixer.backend.django import mixer

from users.api.serializers import UserSerializer

pytestmark = pytest.mark.django_db


class TestUserSerializer(TestCase):
    def test_serializer(self):
        obj = mixer.blend('users.User', first_name='Ali', last_name='', city_id=12)
        serializer = UserSerializer(obj)
        self.assertEqual(serializer.data['username'], obj.email)
        self.assertEqual(serializer.data['email'], obj.email)
        self.assertEqual(serializer.data['first_name'], obj.first_name)
        self.assertEqual(serializer.data['last_name'], obj.last_name)
        self.assertEqual(serializer.data['city'], obj.city_id)
        self.assertEqual(serializer.data['country'], obj.city.country_id if obj.city else None)
