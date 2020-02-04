# Generated by Django 2.2.8 on 2020-02-04 22:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('startelpApp', '0002_auto_20200117_1142'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='persona',
            name='nivelEstudios',
        ),
        migrations.RemoveField(
            model_name='persona',
            name='user',
        ),
        migrations.AlterField(
            model_name='tblinversionista',
            name='persona',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='tblstartup',
            name='persona',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='NivelEstudios',
        ),
        migrations.DeleteModel(
            name='Persona',
        ),
    ]
