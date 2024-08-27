from django.shortcuts import render
from .models import WebsiteDetail, WorkExperience, AcademicsFilter, Academic, ProjectFilter, Project
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.

def index(request):

    website = WebsiteDetail.objects.get(linked_by="Website Details")
    workexp = WorkExperience.objects.all()
    academics_filter = AcademicsFilter.objects.all()
    academics = Academic.objects.all()
    projectfilers = ProjectFilter.objects.all()
    projects = Project.objects.all()

    if request.method == 'POST':
        name = request.POST.get('contact_name', '')
        email = request.POST.get('contact_email', '')
        message = request.POST.get('contact_message', '')
        from_email = settings.EMAIL_HOST_USER
        
        # Compose email subject and body
        subject = f'An Email From {name}'
        email_body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        
        try:
            send_mail(subject, email_body, from_email, ["contact@sreedevnair.com", "sreedevnair02@gmail.com"])
            success_message = 'Your message has been sent successfully. I will get back to you soon :)'
            return render(request, 'index.html', {"website":website, 'workexp':workexp, "success_msg":success_message})
        
        except Exception as e:
            error_message = f'An error occurred while sending the email: {str(e)}'
            return render(request, 'index.html', {"website":website, 'workexp':workexp, "error_msg":error_message})
        
    return render(request, 'index.html', {'website':website, 'workexp':workexp, 'academics_filter':academics_filter, "academics":academics, 
                                          'projectfilters':projectfilers, 'projects':projects})
