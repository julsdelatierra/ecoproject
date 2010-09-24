#!/usr/bin/env python

from django.contrib import admin
from ecoproject.website import models

admin.site.register(models.Project)
admin.site.register(models.Topic)
admin.site.register(models.Question)
admin.site.register(models.Answer)