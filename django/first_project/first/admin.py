from django.contrib import admin
from first.models import Person,Blog,Author,Entry
# Register your models here.
admin.site.register(Person)
admin.site.register(Blog)
admin.site.register(Author)
admin.site.register(Entry)
