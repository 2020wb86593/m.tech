from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResourceViewSet, AlertViewSet, ForumPostViewSet, MentorshipProgramViewSet, register_user

router = DefaultRouter()
router.register(r'resources', ResourceViewSet)
router.register(r'alerts', AlertViewSet)
router.register(r'forum-posts', ForumPostViewSet)
router.register(r'mentorship-programs', MentorshipProgramViewSet)

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('', include(router.urls)),
]