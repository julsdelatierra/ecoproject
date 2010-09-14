from django.db import models

# Create your models here.
class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, verbose_name='Name')
    image = models.ImageField(upload_to='upload/')
    year = models.CharField(max_length=4)
    description = models.TextField()
    
class Topic(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, verbose_name='Titulo')
    
class Question(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField(max_length=100)
    topic = models.ForeignKey(Topic)
    
class Answer(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    question = models.ForeignKey(Question)