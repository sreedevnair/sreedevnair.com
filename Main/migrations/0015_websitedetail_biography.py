# Generated by Django 3.2.13 on 2024-09-07 14:11

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0014_alter_academic_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='websitedetail',
            name='biography',
            field=ckeditor.fields.RichTextField(default=''),
            preserve_default=False,
        ),
    ]
