# Generated by Django 3.2.13 on 2024-09-07 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0017_skill'),
    ]

    operations = [
        migrations.AddField(
            model_name='workexperience',
            name='sub_title',
            field=models.CharField(default='DevDesignZ.com', max_length=125),
            preserve_default=False,
        ),
    ]
