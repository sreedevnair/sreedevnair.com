from django.db import models
from ckeditor.fields import RichTextField
from django.utils.text import slugify

# Create your models here.

class WebsiteDetail(models.Model):

    about_me = RichTextField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='pics/')

    biography = RichTextField()
    my_resume = models.FileField(upload_to='resume/')

    linked_by = models.CharField(max_length=15)

    def __str__(self):
        return self.linked_by
    

class WorkExperience(models.Model):

    title = models.CharField(max_length=125)
    sub_title = models.CharField(max_length=125)
    description = RichTextField(null=True, blank=True)
    duration = models.CharField(max_length=50)
    priority  = models.IntegerField()

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
    description = RichTextField(null=True, blank=True)
    image = models.ImageField(upload_to='pics/academics')
    priority = models.IntegerField(null=True, blank=True)
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
    description = RichTextField(null=True, blank=True)
    image = models.ImageField(upload_to='pics/', blank=True, null=True)
    filter_category = models.ForeignKey(ProjectFilter, on_delete=models.CASCADE, related_name='projects')

    def __str__(self):
        return self.title
    

class Skill(models.Model):

    skill = models.CharField(max_length=100)
    percentage = models.IntegerField()
    priority = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.skill
    


class TechnicalSkill(models.Model):

    technical_skill = models.CharField(max_length=100)
    percentage = models.IntegerField()
    priority = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.technical_skill
