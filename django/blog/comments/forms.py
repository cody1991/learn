from django import forms
from .models import Comment

# 要使用 Django 的表单功能，我们首先导入 forms 模块。Django 的表单类必须继承自 forms.Form 类或者
# forms.ModelForm 类。如果表单对应有一个数据库模型（例如这里的评论表单对应着评论模型），那么使用 ModelForm
# 类会简单很多，这是 Django 为我们提供的方便。之后我们在表单的内部类 Meta 里指定一些和表单相关的东西。model = Comment
# 表明这个表单对应的数据库模型是 Comment 类。fields = ['name', 'email', 'url', 'text']
# 指定了表单需要显示的字段，这里我们指定了 name、email、url、text 需要显示。

# Django 的表单和这个思想类似，正常的前端表单代码应该是和本文开头所提及的那样，但是我们目前并没有写这些代码，而是写了一个
# CommentForm 这个 Python 类。通过调用这个类的一些方法和属性，Django
# 将自动为我们创建常规的表单代码，接下来的教程我们就会看到具体是怎么做的。


class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ['name', 'email', 'url', 'text']
