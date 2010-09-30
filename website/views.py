# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template.context import RequestContext

def inicio(request):
    return render_to_response('inicio.html',{},
                              context_instance=RequestContext(request))

def empresa(request):
    return render_to_response('empresa.html',{},
                              context_instance=RequestContext(request))
    
def servicios(request):
    return render_to_response('servicios.html',{},
                              context_instance=RequestContext(request))

def portafolio(request):
    from models import Project
    counter_row = 0
    (counter_col, counter_gral) = (1,1)
    projects_array = [[]]
    for project in Project.objects.all():
        if counter_col<=5:
            projects_array[counter_row].append(project)
        if counter_col==5:
            projects_array.append([])
        if counter_col==5 or counter_gral==len(Project.objects.all()):
            counter_col=0
            counter_row+=1
        counter_col+=1
        counter_gral+=1
    return render_to_response('portafolio.html',{'projects':projects_array},
                              context_instance=RequestContext(request))
    
def projectDescription(request):
    from models import Project
    from django.utils import simplejson
    print request.POST
    project = Project.objects.get(id__exact=request.POST['id'])
    result = {'image':project.image.url,'name':project.name,
              'description':project.description,'year':project.year}
    return HttpResponse(simplejson.dumps(result),mimetype='application/json')
    
def faq(request):
    from models import Topic
    from django.utils import simplejson
    topics = Topic.objects.all()
    return render_to_response('faq.html',{'topics':topics},
                              context_instance=RequestContext(request))

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
    return render_to_response('contacto.html',{},
                              context_instance=RequestContext(request))