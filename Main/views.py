from django.shortcuts import render
from .models import WebsiteDetail, WorkExperience

# Create your views here.

def index(request):

    website = WebsiteDetail.objects.get(linked_by="Website Details")
    workexp = WorkExperience.objects.all()

    return render(request, 'index.html', {'website':website, 'workexp':workexp})