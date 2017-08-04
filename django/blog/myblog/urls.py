from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    # 此外这里 (?P<pk>[0-9]+) 表示命名捕获组，其作用是从用户访问的 URL
    # 里把括号内匹配的字符串捕获并作为关键字参数传给其对应的视图函数 detail。比如当用户访问 post/255/ 时（注意 Django
    # 并不关心域名，而只关心去掉域名后的相对 URL），被括起来的部分 (?P<pk>[0-9]+) 匹配 255，那么这个 255 会在调用视图函数
    # detail 时被传递进去，实际上视图函数的调用就是这个样子：detail(request, pk=255)。我们这里必须从 URL
    # 里捕获文章的 id，因为只有这样我们才能知道用户访问的究竟是哪篇文章。
    url(r'post/(?P<pk>[0-9]+)/$', views.detail, name='detail'),
    url(r'^archives/(?P<year>[0-9]{4})/(?P<month>[0-9]{1,2})/$',
        views.archives, name='archives'),
    url(r'^category/(?P<pk>[0-9]+)/$', views.category, name='category')
]
