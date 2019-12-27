from django.contrib import admin
from .models import Usuario, Actor, tblInversionista, nivelEstudios, tipoFinanciamiento, tblStartup, tblCategoria, tblInteresInversion, tblActividadComercial, tblProvincia, tblCiudad, tblSector, tblNegocio, tblContacto

# Register your models here.
admin.site.register(Usuario)
admin.site.register(nivelEstudios)
admin.site.register(Actor)
admin.site.register(tipoFinanciamiento)
admin.site.register(tblInversionista)
admin.site.register(tblStartup)
admin.site.register(tblCategoria)
admin.site.register(tblInteresInversion)
admin.site.register(tblActividadComercial)
admin.site.register(tblProvincia)
admin.site.register(tblCiudad)
admin.site.register(tblSector)
admin.site.register(tblNegocio)
admin.site.register(tblContacto)