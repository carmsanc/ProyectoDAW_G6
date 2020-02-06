from django.contrib import admin
from django.conf.urls import url,include
from startelpApp import views
from .views import *
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken

router =routers.DefaultRouter()
router.register(r'users',views.UserViewSet)
router.register(r'fav',views.FavoriteViewSet)
#router.register(r'fav',views.FavoriteViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', ObtainAuthToken.as_view())
    
]