from django.shortcuts import render, get_object_or_404, redirect
from myblog.models import Post

from .models import Comment
from .forms import CommentForm
# Create your views here.


def post_comment(request, post_pk):
    post = get_object_or_404(Post, pk=post_pk)
    if request.method == 'POST':
        form = CommentForm(request.POST)

        if form.is_valid():
                # commit=False 的作用是仅仅利用表单的数据生成 Comment 模型类的实例，但还不保存评论数据到数据库。
            comment = form.save(commit=False)
            comment.post = post
            comment.save()

            # 重定向到 post 的详情页，实际上当 redirect 函数接收一个模型的实例时，它会调用这个模型实例的 get_absolute_url 方法，
            # 然后重定向到 get_absolute_url 方法返回的 URL。
            return redirect(post)
        else:
                 # 检查到数据不合法，重新渲染详情页，并且渲染表单的错误。
            # 因此我们传了三个模板变量给 detail.html，
            # 一个是文章（Post），一个是评论列表，一个是表单 form
            # 注意这里我们用到了 post.comment_set.all() 方法，
            # 这个用法有点类似于 Post.objects.all()
            # 其作用是获取这篇 post 下的的全部评论，
            # 因为 Post 和 Comment 是 ForeignKey 关联的，
            # 因此使用 post.comment_set.all() 反向查询全部评论。

            # 这里 post.comment_set.all() 也等价于 Comment.objects.filter(post=post)

            # 但既然我们已经有了一个 Post 模型的实例 post（它对应的是 Post 在数据库中的一条记录），那么获取和 post
            # 关联的评论列表有一个简单方法，即调用它的 xxx_set 属性来获取一个类似于 objects 的模型管理器，然后调用其 all
            # 方法来返回这个 post 关联的全部评论。 其中 xxx_set 中的 xxx 为关联模型的类名（小写）。例如
            # Post.objects.filter(category=cate) 也可以等价写为 cate.post_set.all()
            comment_list = post.comment_set.all()
            context = {
                'post': post,
                'form': form,
                'comment_list': comment_list
            }

            return render(request, 'myblog/detail.html', context=context)
    return redirect(post)
