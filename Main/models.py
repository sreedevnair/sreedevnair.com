from django.db import models
from django.utils.text import slugify

# Create your models here.

class WebsiteDetail(models.Model):

    first_name = models.CharField(max_length=12)
    second_name = models.CharField(max_length=12)
    about_me = models.TextField()
    profile_picture = models.ImageField(upload_to='pics/')

    linked_by = models.CharField(max_length=15)

    def __str__(self):
        return self.linked_by
    

class WorkExperience(models.Model):

    title = models.CharField(max_length=125)
    description = models.TextField()
    duration = models.CharField(max_length=50)

    def __str__(self):
        return self.title
    

class AcademicsFilter(models.Model):

    category = models.CharField(max_length=125)
    slug = models.SlugField(max_length=150, blank=True, null=True, default="slug")

    def __str__(self):
        return self.category

    def save(self, *args, **kwargs):
        self.slug = slugify(self.category)
        super().save(*args, **kwargs)
    

class Academic(models.Model):

    title = models.CharField(max_length=250)
    sub_title = models.CharField(max_length=250)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='pics/')
    filter_category = models.ForeignKey(AcademicsFilter, on_delete=models.CASCADE, related_name='academics')

    def __str__(self):
        return self.title
    


class ProjectFilter(models.Model):

    topic = models.CharField(max_length=125)
    slug = models.SlugField(max_length=150, blank=True, null=True)

    def __str__(self):
        return self.topic

    def save(self, *args, **kwargs):
        self.slug = slugify(self.topic)
        super().save(*args, **kwargs)


class Project(models.Model):

    title = models.CharField(max_length=250)
    sub_title = models.CharField(max_length=250)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='pics/', blank=True, null=True)
    filter_category = models.ForeignKey(ProjectFilter, on_delete=models.CASCADE, related_name='projects')

    def __str__(self):
        return self.title