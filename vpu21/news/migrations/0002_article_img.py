# Generated by Django 4.0.1 on 2022-01-14 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='img',
            field=models.TextField(default=''),
        ),
    ]