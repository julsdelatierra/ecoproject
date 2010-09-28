# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template.context import RequestContext

def inicio(request):
    return render_to_response('inicio.html',{},context_instance=RequestContext(request))

def empresa(request):
    return render_to_response('empresa.html',{},context_instance=RequestContext(request))
    
def servicios(request):
    return render_to_response('servicios.html',{},context_instance=RequestContext(request))

def portafolio(request):
    from models import Project
    projects = Project.objects.all()
    print projects
    return render_to_response('portafolio.html',{'projects':projects},context_instance=RequestContext(request))

def project_description(request):
    from models import Project
    projects = Project.objects.get(id__exact=request.POST['id'])
    result = {'logo':projects.image_gray,'name':projects.name,
              'description':project.description,'year':projects.year}
    return HttpResponse(result,mimetype='application/json')
    
def faq(request):
    from models import Topic
    from django.utils import simplejson
    topics = Topic.objects.all()
    return render_to_response('faq.html',{'topics':topics},context_instance=RequestContext(request))

def getQuestions(request):
    if request.is_ajax():
        from models import Question
        questions = Question.objects.filter(topic__exact=request.POST['topic'])
        print questions
    return HttpResponse('hola')

def getAnswer(request):
    if request.is_ajax():
        from models import Answer
        answer = Answer.objects.get(question__exact=request.POST['question'])
        print answer
    return HttpResponse('hola')
    
def contacto(request):
    return render_to_response('contacto.html',{},context_instance=RequestContext(request))