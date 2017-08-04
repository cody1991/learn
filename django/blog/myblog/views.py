# 注意这里我们用到了从 django.shortcuts 模块导入的 get_object_or_404 方法，其作用就是当传入的 pk 对应的
# Post 在数据库存在时，就返回对应的 post，如果不存在，就给用户返回一个 404 错误，表明用户请求的文章不存在。
from django.shortcuts import render, get_object_or_404

from django.http import HttpResponse
from .models import Post, Category
from comments.forms import CommentForm

import markdown
# Create your views here.


def index(request):
    # return render(request,'myblog/index.html',context={
    #       'title':'我的博客首页',
    #       'welcome':'欢迎访问我的博客首页'
    #   })
    post_list = Post.objects.all().order_by('-created_time')
    return render(request, 'myblog/index.html', context={
        'post_list': post_list
    })


def detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.body = markdown.markdown(post.body,
                                  extensions=[
                                      'markdown.extensions.extra',
                                      'markdown.extensions.codehilite',
                                      'markdown.extensions.toc'
                                  ])
    form = CommentForm()
    comment_list = post.comment_set.all()

    return render(request, 'myblog/detail.html', context={'post': post, 'form': form, 'comment_list': comment_list})


def archives(request, year, month):
  # Python 中类实例调用属性的方法通常是 created_time.year，但是由于这里作为函数的参数列表，所以 Django
  # 要求我们把点替换成了两个下划线，即 created_time__year
    post_list = Post.objects.filter(created_time__year=year,
                                    created_time__month=month).order_by('-created_time')

    return render(request, 'myblog/index.html', context={'post_list': post_list})


def category(request, pk):
    cate = get_object_or_404(Category, pk=pk)
    post_list = Post.objects.filter(category=cate).order_by('-created_time')
    return render(request, 'myblog/index.html', context={'post_list': post_list})
