from django.conf.urls.defaults import *
from website.views import somos, contacto, faq, inicio, servicios
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    (r'^inicio/$',inicio),
    (r'^somos/$',somos),
    (r'^contacto/$',contacto),
    (r'^faq/$',faq),
    (r'^servicios/$',servicios),
    #(r'^admin/', include(admin.site.urls)),
    
    # Example:
    # (r'^ecoproject/', include('ecoproject.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # (r'^admin/', include(admin.site.urls)),
)
