from django.db import models

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