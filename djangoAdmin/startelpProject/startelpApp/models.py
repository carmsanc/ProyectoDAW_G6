from django.db import models
import datetime
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
# Create your models here.
User = get_user_model()

class NivelEstudios(models.Model):
    nombreNivel = models.CharField(max_length=20)
    def __str__(self):
        return self.nombreNivel

class Persona(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cedulaActor = models.CharField(max_length=10,primary_key=True)
    nivelEstudios = models.ForeignKey(NivelEstudios, on_delete=models.CASCADE)
    telefono = models.CharField(max_length=10)
    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'

#
# class tipoFinanciamiento(models.Model):
#     idTipoF = models.IntegerField(primary_key=True)
#     nombreFinanc = models.CharField(max_length=50)
#
#     def __str__(self):
#         return self.nombreFinanc
#
# class tblInversionista(models.Model):
#     idInversionista = models.IntegerField(primary_key=True)
#     cedulaActor = models.ForeignKey(Actor, on_delete=models.CASCADE)
#     direccion = models.CharField(max_length=200)
#     experienciaInversion = models.BooleanField()
#     idTipoF = models.ForeignKey(tipoFinanciamiento, on_delete = models.CASCADE)
#
# class tblStartup(models.Model):
#     idStartup = models.IntegerField(primary_key=True)
#     cedulaActor = models.ForeignKey(Actor, on_delete= models.CASCADE)
#
# class tblCategoria(models.Model):
#     idCategoria = models.IntegerField(primary_key=True)
#     nombreCategoria = models.CharField(max_length=50)
#
#     def __str__(self):
#         return self.nombreCategoria
#
#
# class tblInteresInversion(models.Model):
#     idInteres = models.IntegerField(primary_key=True)
#     idInversionista = models.ForeignKey(tblInversionista, on_delete = models.CASCADE)
#     idCategoria = models.ForeignKey(tblCategoria, on_delete= models.CASCADE)
#
# class tblActividadComercial(models.Model):
#     idActComercial = models.IntegerField(primary_key=True)
#     nombreAct = models.CharField(max_length=50)
#
#     def __str__(self):
#         return self.nombreAct
#
# class tblProvincia(models.Model):
#     idProvincia = models.IntegerField(primary_key=True)
#     nombreProvincia = models.CharField(max_length=50)
#
#     def __str__(self):
#         return self.nombreProvincia
#
# class tblCiudad(models.Model):
#     idCiudad = models.IntegerField(primary_key=True)
#     idProvincia = models.ForeignKey(tblProvincia, on_delete = models.CASCADE)
#     nombreCiudad = models.CharField(max_length=50)
#
#     def __str__(self):
#         return self.nombreCiudad
#
#
# class tblSector(models.Model):
#     idSector = models.IntegerField(primary_key=True)
#     idCiudad = models.ForeignKey(tblCiudad, on_delete = models.CASCADE)
#     nombreSector = models.CharField(max_length=50)
#
#     def __str__(self):
#         return self.nombreSector
#
#
#
# class tblNegocio(models.Model):
#     idNegocio = models.IntegerField(primary_key=True)
#     idStartup = models.ForeignKey(tblStartup , on_delete = models.CASCADE)
#     idSector = models.ForeignKey( tblSector, on_delete = models.CASCADE)
#     idCategoria = models.ForeignKey( tblCategoria, on_delete = models.CASCADE)
#     nombreNegocio = models.CharField(max_length= 100)
#     descripcion = models.CharField(max_length=200)
#     imagenNegocio = models.ImageField()
#     address = models.CharField(max_length=100)
#     montoRequerido = models.FloatField()
#     fechaCreacion = models.DateField()
#
#     def __str__(self):
#         return self.nombreNegocio
#
#
# class tblContacto(models.Model):
#     idContacto = models.IntegerField(primary_key=True)
#     idInversionista = models.ForeignKey(tblInversionista, on_delete=models.CASCADE)
#     idNegocio = models.ForeignKey(tblNegocio, on_delete=models.CASCADE)
#     fechaContacto = models.DateTimeField()
#
# # Create your models here.
