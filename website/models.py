from django.db import models

# Create your models here.
class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='upload/')
    year = models.CharField(max_length=4)
    
class Topic(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    
class Question(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField(max_length=100)
    topic = models.ForeignKey(Topic)
    
class Answer(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    question = models.ForeignKey(Question)