from django.contrib import admin
from django.urls import path, include
from core.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('', index),
]