from django.conf.urls.defaults import *
from django.conf import settings
from website.views import inicio, empresa, servicios, portafolio, faq, contacto, projectDescription
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^medios/(?P<path>.*)$', 'django.views.static.serve',
     {'document_root': settings.STATIC, 'show_indexes':False}),
    (r'^$',inicio),
    (r'^empresa/$',empresa),
    (r'^servicios/$',servicios),
    (r'^servicios/$',servicios),
    (r'^portafolio/$',portafolio),
    (r'^faq/$',faq),
    (r'^contacto/$',contacto),
    
    # i18n
    #(r'^i18n/', include('django.conf.urls.i18n')),
    
    #ajax communication
    (r'^projectdescription/$',projectDescription),
    # Example:
    # (r'^ecoproject/', include('ecoproject.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs'
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    (r'^admin/', include(admin.site.urls)),
)
