from rest_framework import serializers
from .models import Resource, Alert, ForumPost, MentorshipProgram

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'

class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = '__all__'

class ForumPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = '__all__'

class MentorshipProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorshipProgram
        fields = '__all__'