# Generated by Django 3.0.1 on 2019-12-27 16:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
                ('apellido', models.CharField(max_length=30)),
                ('telefono', models.CharField(max_length=10)),
                ('correo', models.EmailField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='nivelEstudios',
            fields=[
                ('idEstudios', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreNivel', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='tblActividadComercial',
            fields=[
                ('idActComercial', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreAct', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='tblCategoria',
            fields=[
                ('idCategoria', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreCategoria', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='tblCiudad',
            fields=[
                ('idCiudad', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreCiudad', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='tblProvincia',
            fields=[
                ('idProvincia', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreProvincia', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='tipoFinanciamiento',
            fields=[
                ('idTipoF', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreFinanc', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('idUser', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('cedula', models.CharField(max_length=10)),
                ('password', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='tblStartup',
            fields=[
                ('idStartup', models.IntegerField(primary_key=True, serialize=False)),
                ('cedulaActor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.Actor')),
            ],
        ),
        migrations.CreateModel(
            name='tblSector',
            fields=[
                ('idSector', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreSector', models.CharField(max_length=50)),
                ('idCiudad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblCiudad')),
            ],
        ),
        migrations.CreateModel(
            name='tblNegocio',
            fields=[
                ('idNegocio', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreNegocio', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=200)),
                ('imagenNegocio', models.ImageField(upload_to='')),
                ('address', models.CharField(max_length=100)),
                ('montoRequerido', models.FloatField()),
                ('fechaCreacion', models.DateField()),
                ('idCategoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblCategoria')),
                ('idSector', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblSector')),
                ('idStartup', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblStartup')),
            ],
        ),
        migrations.CreateModel(
            name='tblInversionista',
            fields=[
                ('idInversionista', models.IntegerField(primary_key=True, serialize=False)),
                ('direccion', models.CharField(max_length=200)),
                ('experienciaInversion', models.BooleanField()),
                ('cedulaActor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.Actor')),
                ('idTipoF', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tipoFinanciamiento')),
            ],
        ),
        migrations.CreateModel(
            name='tblInteresInversion',
            fields=[
                ('idInteres', models.IntegerField(primary_key=True, serialize=False)),
                ('idCategoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblCategoria')),
                ('idInversionista', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblInversionista')),
            ],
        ),
        migrations.CreateModel(
            name='tblContacto',
            fields=[
                ('idContacto', models.IntegerField(primary_key=True, serialize=False)),
                ('fechaContacto', models.DateTimeField()),
                ('idInversionista', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblInversionista')),
                ('idNegocio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblNegocio')),
            ],
        ),
        migrations.AddField(
            model_name='tblciudad',
            name='idProvincia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.tblProvincia'),
        ),
        migrations.AddField(
            model_name='actor',
            name='cedulaActor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.Usuario'),
        ),
        migrations.AddField(
            model_name='actor',
            name='id_Estudios',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startelp.nivelEstudios'),
        ),
    ]