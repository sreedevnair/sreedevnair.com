from django.contrib import admin
from .models import WebsiteDetail, WorkExperience, AcademicsFilter, Academic

# Register your models here.
admin.site.register(WebsiteDetail)
admin.site.register(WorkExperience)
admin.site.register(AcademicsFilter)
admin.site.register(Academic)
