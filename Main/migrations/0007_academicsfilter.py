# Generated by Django 3.2.13 on 2024-08-23 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0006_workexperience'),
    ]

    operations = [
        migrations.CreateModel(
            name='AcademicsFilter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=125)),
            ],
        ),
    ]
