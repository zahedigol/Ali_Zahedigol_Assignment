import pytest
from django.urls import reverse
from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APIClient, APIRequestFactory, APITestCase

pytestmark = pytest.mark.django_db


class UserTests(APITestCase):
    def setUp(self) -> None:
        self.factory = APIRequestFactory()
        self.user = mixer.blend('users.User')

    def test_user_my(self):
        url = reverse('user-my')
        client = APIClient()

        response = client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        client.force_login(user=self.user)
        response = client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['id'], self.user.id)

    def test_user_update(self):
        user = mixer.blend('users.User')
        client = APIClient()
        url = reverse('user-detail', args=[user.pk])

        data = {'email': "ali2@gmail.com", 'city': 1}
        response = client.patch(url, data=data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        client.force_login(user=self.user)
        response = client.patch(url, data=data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], data['email'])
        self.assertEqual(response.data['city'], data['city'])
