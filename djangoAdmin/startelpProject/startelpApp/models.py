from django.db import models
import datetime
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
# Create your models here.
User = get_user_model()


class tipoFinanciamiento(models.Model):
    nombreFinanc = models.CharField(max_length=50)
    def __str__(self):
        return self.nombreFinanc

class tblInversionista(models.Model):
    persona = models.ForeignKey(User, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=200)
    experienciaInversion = models.BooleanField()
    financiamiento = models.ForeignKey(tipoFinanciamiento, on_delete = models.CASCADE)

class tblStartup(models.Model):
    persona = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.persona

class tblCategoria(models.Model):
    nombreCategoria = models.CharField(max_length=50)
    def __str__(self):
        return self.nombreCategoria

class tblInteresInversion(models.Model):
    inversionista = models.ForeignKey(tblInversionista, on_delete = models.CASCADE)
    categoria = models.ForeignKey(tblCategoria, on_delete= models.CASCADE)

class tblActividadComercial(models.Model):
    nombreAct = models.CharField(max_length=50)

    def __str__(self):
        return self.nombreAct

class tblProvincia(models.Model):
    nombreProvincia = models.CharField(max_length=50)
    def __str__(self):
        return self.nombreProvincia

class tblCiudad(models.Model):
    provincia = models.ForeignKey(tblProvincia, on_delete = models.CASCADE)
    nombreCiudad = models.CharField(max_length=50)
    def __str__(self):
        return self.nombreCiudad

class tblSector(models.Model):
    ciudad = models.ForeignKey(tblCiudad, on_delete = models.CASCADE)
    nombreSector = models.CharField(max_length=50)
    def __str__(self):
        return f'{self.ciudad.nombreCiudad}, {self.nombreSector}'

class tblNegocio(models.Model):
    startup = models.ForeignKey(tblStartup , on_delete = models.CASCADE)
    sector = models.ForeignKey( tblSector, on_delete = models.CASCADE)
    categoria = models.ForeignKey( tblCategoria, on_delete = models.CASCADE)
    nombreNegocio = models.CharField(max_length= 100)
    descripcion = models.CharField(max_length=200)
    imagenNegocio = models.ImageField(upload_to='uploads/')
    address = models.CharField(max_length=100)
    montoRequerido = models.FloatField()
    fechaCreacion = models.DateField()
    def __str__(self):
        return self.nombreNegocio

class tblContacto(models.Model):
    inversionista = models.ForeignKey(tblInversionista, on_delete=models.CASCADE)
    negocio = models.ForeignKey(tblNegocio, on_delete=models.CASCADE)
    fechaContacto = models.DateTimeField()
    def __str__(self):
        return f'Contacto {self.negocio.nombreNegocio}'
# # Create your models here.
