from django.shortcuts import render, redirect
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .models import Resource, Alert, ForumPost, MentorshipProgram
from .serializers import ResourceSerializer, AlertSerializer, ForumPostSerializer, MentorshipProgramSerializer
from .permissions import IsAdmin, IsMentor

# View for serving a simple homepage
def index(request):
    return render(request, 'core/index.html')

# Custom user registration view
@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    re_password = request.data.get('re_password')

    print(f"Received data: username={username}, password={password}, re_password={re_password}")

    if password != re_password:
        return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username=username, password=password)
        user.save()
        return Response({"success": "User registered successfully"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

# Viewsets for handling CRUD operations on models
class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [IsAdmin]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

class AlertViewSet(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [IsAdmin]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

class ForumPostViewSet(viewsets.ModelViewSet):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [IsAdmin, IsMentor]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

class MentorshipProgramViewSet(viewsets.ModelViewSet):
    queryset = MentorshipProgram.objects.all()
    serializer_class = MentorshipProgramSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [IsAdmin, IsMentor]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]