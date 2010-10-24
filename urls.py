from django.conf.urls.defaults import *
from django.conf import settings
from website import views as website
#from website.views import inicio, empresa, servicios, portafolio, faq, contacto, projectDescription
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^medios/(?P<path>.*)$', 'django.views.static.serve',
     {'document_root': settings.STATIC, 'show_indexes':False}),
    (r'^$',website.inicio),
    (r'^empresa/$',website.empresa),
    (r'^servicios/$',website.servicios),
    (r'^servicios/$',website.servicios),
    (r'^portafolio/$',website.portafolio),
    (r'^faq/$',website.faq),
    (r'^contacto/$',website.contacto),
    
    # i18n
    (r'^i18n/', include('django.conf.urls.i18n')),
    
    #ajax communication
    (r'^projectdescription/$',website.projectDescription),
    (r'^questionslist/$',website.questionsList),
    (r'^answer/$',website.answer),
    (r'^questioncontact/$',website.questionContact),
    (r'^switchlanguage/$',website.switchLanguage),
    (r'^contactceo/$',website.contactCEO),
    # Example:
    # (r'^ecoproject/', include('ecoproject.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs'
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    (r'^admin/', include(admin.site.urls)),
)
