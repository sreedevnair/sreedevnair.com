# Generated by Django 3.2.13 on 2024-10-28 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0021_alter_technicalskill_priority'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='priority',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]