from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from .models import Resource, UserProfile

class ResourceTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin_user = User.objects.create_user(username='admin', password='adminpassword')
        self.admin_profile = UserProfile.objects.create(user=self.admin_user, role='admin')
        self.client.login(username='admin', password='adminpassword')

    def test_create_resource(self):
        response = self.client.post('/api/resources/', {'title': 'Test Resource', 'content': 'Test Content'})
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Resource.objects.count(), 1)
        self.assertEqual(Resource.objects.get().title, 'Test Resource')