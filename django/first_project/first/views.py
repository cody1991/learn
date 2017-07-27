#coding:utf-8
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

# 跳转
from django.http import HttpResponseRedirect
# from django.core.urlresolvers import reverse 1.4.x ~ 1.10.x
from django.urls import reverse # 1.10.x

def old_add2_redirect(request,a,b):
	return HttpResponseRedirect(
		reverse('add2',args=(a,b))
	)


def index(request):
	# return HttpResponse(u"Hello World")
	string = u"学习django"
	TutorialList = ['HTML','CSS','jQuery','Python','Django']
	info_dict = {'site': u'cody', 'content': u'learn django'}
	List = map(str,range(100)) # 一个长度100的List
	return render(request,'first/home.html',{'string':string,'TutorialList':TutorialList,'info_dict':info_dict,'List':List, 'var': 90})

def add(request):
	a = request.GET.get('a',0)
	b = request.GET.get('b',0)
	c = int(a) + int(b)
	return HttpResponse(str(c))

def add2(request,a,b):
	c = int(a) + int(b)
	return HttpResponse(str(c))
