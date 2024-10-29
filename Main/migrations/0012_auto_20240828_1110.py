# Generated by Django 3.2.13 on 2024-08-28 11:10

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0011_project_projectfilter'),
    ]

    operations = [
        migrations.AlterField(
            model_name='academic',
            name='description',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projectfilter',
            name='slug',
            field=models.SlugField(blank=True, max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='websitedetail',
            name='about_me',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='description',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]
