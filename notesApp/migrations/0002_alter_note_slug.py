# Generated by Django 5.0.7 on 2024-07-31 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notesApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
    ]
