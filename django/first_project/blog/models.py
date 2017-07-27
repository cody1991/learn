from django.db import models

# Create your models here.

class Author(models.Model):
	name = models.CharField(max_length=50)
	qq = models.CharField(max_length=10)
	addr = models.TextField()
	email = models.EmailField()

	def __str__(self):
		return self.name

class Article(models.Model):
    title = models.CharField(max_length=50)
    author = models.ForeignKey(Author)
    content = models.TextField()
    score = models.IntegerField()  # 文章的打分
    tags = models.ManyToManyField('Tag')
 
    def __str__(self):
        return self.title

class Tag(models.Model):
    name = models.CharField(max_length=50)
 
    def __str__(self):
        return self.name