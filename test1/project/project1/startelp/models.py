from django.db import models
import datetime
from django.utils import timezone

# Create your models here.
class Usuario(models.Model):
    idUser = models.CharField(max_length=100, primary_key=True)
    cedula = models.CharField(max_length=10)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.idUser

class nivelEstudios(models.Model):
    idEstudios = models.IntegerField(primary_key=True) 
    nombreNivel = models.CharField(max_length=20)   

class Actor(models.Model):
    cedulaActor = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    id_Estudios = models.ForeignKey(nivelEstudios, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    telefono = models.CharField(max_length=10)
    correo = models.EmailField(max_length=100)
    def __str__(self):
        return self.nombre


class tipoFinanciamiento(models.Model):
    idTipoF = models.IntegerField(primary_key=True)
    nombreFinanc = models.CharField(max_length=50)

    def __str__(self):
        return self.nombreFinanc

class tblInversionista(models.Model):
    idInversionista = models.IntegerField(primary_key=True)
    cedulaActor = models.ForeignKey(Actor, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=200)
    experienciaInversion = models.BooleanField()
    idTipoF = models.ForeignKey(tipoFinanciamiento, on_delete = models.CASCADE)

class tblStartup(models.Model):
    idStartup = models.IntegerField(primary_key=True)
    cedulaActor = models.ForeignKey(Actor, on_delete= models.CASCADE)

class tblCategoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True)
    nombreCategoria = models.CharField(max_length=50)

    def __str__(self):
        return self.nombreCategoria


class tblInteresInversion(models.Model):
    idInteres = models.IntegerField(primary_key=True)
    idInversionista = models.ForeignKey(tblInversionista, on_delete = models.CASCADE)
    idCategoria = models.ForeignKey(tblCategoria, on_delete= models.CASCADE)

class tblActividadComercial(models.Model):
    idActComercial = models.IntegerField(primary_key=True)
    nombreAct = models.CharField(max_length=50)

    def __str__(self):
        return self.nombreAct

class tblProvincia(models.Model):
    idProvincia = models.IntegerField(primary_key=True)
    nombreProvincia = models.CharField(max_length=50)

    def __str__(self):
        return self.nombreProvincia

class tblCiudad(models.Model):
    idCiudad = models.IntegerField(primary_key=True)
    idProvincia = models.ForeignKey(tblProvincia, on_delete = models.CASCADE)
    nombreCiudad = models.CharField(max_length=50)

    def __str__(self):
        return self.nombreCiudad


class tblSector(models.Model):
    idSector = models.IntegerField(primary_key=True)
    idCiudad = models.ForeignKey(tblCiudad, on_delete = models.CASCADE)
    nombreSector = models.CharField(max_length=50)

    def __str__(self):
        return self.nombreSector



class tblNegocio(models.Model):
    idNegocio = models.IntegerField(primary_key=True)
    idStartup = models.ForeignKey(tblStartup , on_delete = models.CASCADE)
    idSector = models.ForeignKey( tblSector, on_delete = models.CASCADE)
    idCategoria = models.ForeignKey( tblCategoria, on_delete = models.CASCADE)
    nombreNegocio = models.CharField(max_length= 100)
    descripcion = models.CharField(max_length=200)
    imagenNegocio = models.ImageField()
    address = models.CharField(max_length=100)
    montoRequerido = models.FloatField()
    fechaCreacion = models.DateField()

    def __str__(self):
        return self.nombreNegocio


class tblContacto(models.Model):
    idContacto = models.IntegerField(primary_key=True)
    idInversionista = models.ForeignKey(tblInversionista, on_delete=models.CASCADE)
    idNegocio = models.ForeignKey(tblNegocio, on_delete=models.CASCADE)
    fechaContacto = models.DateTimeField()
