from django.http import JsonResponse
from django.contrib.auth.models import *
from .models import *
from .views import *
from rest_framework import viewsets
from startelpApp.serializers import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = tblFavorite.objects.all()
    serializer_class = FavoriteSerializer
    #authentication_classes = (TokenAuthentication,)
    #permission_classes = (IsAuthenticated,)

class InversionistaViewSet(viewsets.ModelViewSet):
    queryset = tblInversionista.objects.all()
    serializer_class = InversionistaSerializer
