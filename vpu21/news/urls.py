from django.urls import path
from . import views

urlpatterns = [
    path('', views.allNews, name="news"),
    path('/<int:idNews>', views.showNews)
]