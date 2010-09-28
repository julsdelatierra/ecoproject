from django.db import models

# Create your models here.
class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, verbose_name='Name')
    image = models.ImageField(upload_to='upload/')
    image_gray = models.ImageField(upload_to='upload/')
    year = models.CharField(max_length=4)
    description = models.TextField()
    
    def __unicode__(self):
        return unicode(self.name)
    
class Topic(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, verbose_name='Titulo')
    
    def __unicode__(self):
        return unicode(self.title)
    
class Question(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField(max_length=100)
    topic = models.ForeignKey(Topic)
    
    def __unicode__(self):
        return unicode(self.text)
    
class Answer(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    question = models.ForeignKey(Question)
    
    def __unicode__(self):
        return unicode(self.text)