# Generated by Django 3.2.13 on 2024-10-28 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0018_workexperience_sub_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='workexperience',
            name='priority',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
