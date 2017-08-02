from django.contrib import admin
from blog.models import Author,Article,Tag
# Register your models here.

admin.site.register(Author)
admin.site.register(Article)
admin.site.register(Tag)
