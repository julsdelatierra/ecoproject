# Create your views here.
from django.shortcuts import render_to_response
from django.template.context import RequestContext

def inicio(request):
    return render_to_response('inicio.html',{},context_instance=RequestContext(request))

def empresa(request):
    return render_to_response('empresa.html',{})
    
def servicios(request):
    return render_to_response('servicios.html',{})

def portafolio(request):
    return render_to_response('portafolio.html',{})
    
def faq(request):
    return render_to_response('faq.html',{})
    
def contacto(request):
    return render_to_response('contacto.html',{})