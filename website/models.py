#!/usr/local/bin/python
# -*- coding: utf-8 -*-

from django.db import models

# Create your models here.
class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    name_en = models.CharField(max_length=200)
    image = models.ImageField(upload_to='upload/')
    year = models.CharField(max_length=4)
    description = models.TextField()
    description_en = models.TextField()
    
    def __unicode__(self):
        return unicode(self.name)
    
class Topic(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    title_en = models.CharField(max_length=100)
    
    def __unicode__(self):
        return unicode(self.title)
    
class Question(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=100)
    text_en = models.CharField(max_length=100)
    topic = models.ForeignKey(Topic)
    
    def __unicode__(self):
        return unicode(self.text)
    
class Answer(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    text_en = models.TextField()
    question = models.ForeignKey(Question)
    
    def __unicode__(self):
        return unicode(self.text)