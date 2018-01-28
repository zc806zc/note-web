# Django

- <https://github.com/django/django>
- Django安装 <https://www.djangoproject.com/download>
- 第一个Django <https://docs.djangoproject.com/en/1.10/intro/tutorial01>

```python
pip install django

import django
print django.get_version()

django-admin startproject djangosite
cd djangosite
python manage.py startapp app

// 然后修改以下文件
app/views.py
add app/urls.py
djangosite/urls.py

// python manage.py migrate
setting.py添加
ALLOWED_HOSTS = ['198.211.99.20', 'localhost', '127.0.0.1', 'qmen.space']
python manage.py runserver 0.0.0.0:8000
访问 localhost:8000/app/
```

# Django基础

- 重量级 最广泛 最成熟
- 强大而封闭 因为它的各个模块结合地比较紧密
- BSD版权
- 定义了服务发布 路由映射 模板编程 数据处理的一整套功能

# Django模型层

# Django视图层

# Django表单
