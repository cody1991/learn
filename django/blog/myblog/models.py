from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
# Create your models here.

# DateTimeField IntegerField

# 标准的 python 类，继承 models.Model
# 有一个属性 name 是 models.CharField 的一个实例

# 一个python类对应一个数据库表格，类名就是表名，类属性对应表格的列，属性名是列名


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=70)
    # 存储大字段文本
    body = models.TextField()
    created_time = models.DateTimeField()
    modified_time = models.DateTimeField()

    # CharField一定要有数据，不然会报错，加了blank允许空
    excerpt = models.CharField(max_length=200, blank=True)

    # 一篇文章只能有一个分类，但是一个分类可以有多个文章，一对多的关系，用 ForeignKey
    # 一篇文章可以有多个标签，标签下也可以有多个文章，用ManyToManyField
    # 可以没有标签，所以 blank=True
    # https://docs.djangoproject.com/en/1.10/topics/db/models/#relationships
    category = models.ForeignKey(Category)
    tags = models.ManyToManyField(Tag, blank=True)

    # 文章作者， User 是从django.contrib.auth.models导入的
    # diango.contrib.auth 是 django 内置应用，专门用于处理网站用户的注册，登录等流程，User是django为我们写好的用户模型
    # 我们用 ForeignKey 把文章和User关联
    # 一篇文章有一个作者，一个作者可能多篇文章
    author = models.ForeignKey(User)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        # 注意到 URL 配置中的 url(r'^post/(?P<pk>[0-9]+)/$', views.detail,
        # name='detail') ，我们设定的 name='detail' 在这里派上了用场。看到这个 reverse
        # 函数，它的第一个参数的值是 'blog:detail'，意思是 blog 应用下的 name=detail 的函数，由于我们在上面通过
        # app_name = 'blog' 告诉了 Django 这个 URL 模块是属于 blog 应用的，因此 Django 能够顺利地找到
        # blog 应用下 name 为 detail 的视图函数，于是 reverse 函数会去解析这个视图函数对应的 URL，我们这里
        # detail 对应的规则就是 post/(?P<pk>[0-9]+)/ 这个正则表达式，而正则表达式部分会被后面传入的参数 pk
        # 替换，所以，如果 Post 的 id（或者 pk，这里 pk 和 id 是等价的） 是 255 的话，那么
        # get_absolute_url 函数返回的就是 /post/255/ ，这样 Post 自己就生成了自己的 URL。
        return reverse('myblog:detail', kwargs={'pk': self.pk})

# python manage.py makemigrations
# 在 myblog 生成一个0001_initial.py 记录我们队模型做了什么操作
# 不过这样只是告诉django我们做了什么改变，为了真正创建数据库，执行 python manage.py migrate
# 检索 migrations 下的文件，得知我们的操作，然后翻译成数据库操作语言

# python manage.py sqlmigrate myblog 0001
# 可以看帮我们做了什么 sql 操作

# python manager.py shell
# >>> from myblog.models import Category, Tag, Post
# >>> c = Category(name='category test')
# >>> c.save()
# >>> t = Tag(name='tag test')
# >>> t.save()

# python manager.py createsuperuser

# >>> from myblog.models import Category, Tag, Post
# >>> from django.utils import timezone
# >>> from django.contrib.auth.models import User

# >>> user = User.objects.get(username='codytang')
# >>> c = Category.objects.get(name='category test')

# >>> p = Post(title='title test', body='body test', created_time=timezone.now(), modified_time=timezone.now(), category=c, author=user)
# >>> p.save()

# python_2_unicode_compatible 装饰器用于兼容 Python2。如果你使用的 Python3
# 开发环境，去掉这个装饰器不会有任何影响。如果你使用的 Python2 开发环境，而又不想使用这个装饰器，则将 __str__ 方法改为
# __unicode__ 方法即可。

# >>> c = Category.objects.get(name='category test')
# >>> c.name = 'category test new'
# >>> c.save()
# >>> Category.objects.all()
# <QuerySet [<Category: test category new>]>

# >>> p = Post.objects.get(title='title test')
# >>> p
# <Post: title test>
# >>> p.delete()
# (1, {'blog.Post_tags': 0, 'blog.Post': 1})
# >>> Post.objects.all()
# <QuerySet []>
