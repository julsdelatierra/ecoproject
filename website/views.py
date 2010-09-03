# Create your views here.
from django.shortcuts import render_to_response

def inicio(request):
    return render_to_response('inicio.html',{})

def somos(request):
    return render_to_response('somos.html',{})
    
def servicios(request):
    return render_to_response('servicios.html',{})

def contacto(request):
    return render_to_response('contacto.html',{})

def faq(request):
    return render_to_response('faq.html',{})