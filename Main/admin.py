from django.contrib import admin
from .models import WebsiteDetail, WorkExperience, AcademicsFilter, Academic, ProjectFilter, Project, Skill, TechnicalSkill

# Register your models here.
admin.site.register(WebsiteDetail)
admin.site.register(WorkExperience)
admin.site.register(AcademicsFilter)
admin.site.register(Academic)
admin.site.register(ProjectFilter)
admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(TechnicalSkill)
