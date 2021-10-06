from django.urls import path
from . import views

urlpatterns = [
    path('', views.Shorturl),
    # path('/urls', views.index),
    # path('/urls/<str:code', views.site)
]