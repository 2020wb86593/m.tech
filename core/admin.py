from django.contrib import admin
from .models import Resource, Alert, ForumPost, MentorshipProgram, UserProfile

admin.site.register(Resource)
admin.site.register(Alert)
admin.site.register(ForumPost)
admin.site.register(MentorshipProgram)
admin.site.register(UserProfile)