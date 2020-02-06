from django.contrib.auth.models import *
from .models import *
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}
    def create(self,validated_data):
       user = User.objects.create_user(**validated_data)
       return user

class ProvinciaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=tblProvincia
        fields=['nombreProvincia']
    
class CiudadSerializer(serializers.HyperlinkedModelSerializer):
    provincia=ProvinciaSerializer(read_only=True)
    class Meta:
        model=tblCiudad
        fields=['provincia','nombreCiudad']
        
class SectorSerializer(serializers.HyperlinkedModelSerializer):
    ciudad=CiudadSerializer(read_only=True)
    class Meta:
        model=tblSector
        fields=['ciudad','nombreSector']
class CategoriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=tblCategoria
        fields=['nombreCategoria']
        
class StartupSerializer(serializers.HyperlinkedModelSerializer):
    persona=UserSerializer(read_only=True)
    class Meta:
        model = tblStartup
        fields = ['persona']
    
class NegocioSerializer(serializers.HyperlinkedModelSerializer):
    startup=StartupSerializer(read_only=True)
    sector=SectorSerializer(read_only=True)
    categoria=CategoriaSerializer(read_only=True)
    
    class Meta:
        model=tblNegocio
        fields=['startup','sector','categoria','nombreNegocio','descripcion','imagenNegocio','address','montoRequerido','fechaCreacion']
        

class FinanciamientoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = tipoFinanciamiento
        fields = ['nombreFinanc']

class InversionistaSerializer(serializers.HyperlinkedModelSerializer):
    persona=UserSerializer(read_only=True)
    financiamiento=FinanciamientoSerializer(read_only=True)
    class Meta:
        model=tblInversionista
        fields = ['persona','direccion','experienciaInversion','financiamiento']
        
class ContactoSerializer(serializers.HyperlinkedModelSerializer):
    inversionista=InversionistaSerializer(read_only=True)
    negocio=NegocioSerializer(read_only=True)
    class Meta:
        model=tblContacto
        fields=['inversionista','negocio','fechaContacto']
    
class FavoriteSerializer(serializers.HyperlinkedModelSerializer):
   
    inversionista=InversionistaSerializer(read_only=True)
    lista_negocios=NegocioSerializer(read_only=True, many=True)
    class Meta:
        model=tblFavorite