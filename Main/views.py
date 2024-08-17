from django.shortcuts import render
from .models import WebsiteDetail

# Create your views here.

def index(request):

    website = WebsiteDetail.objects.get(linked_by="Website Details")

    return render(request, 'index.html', {'website':website})