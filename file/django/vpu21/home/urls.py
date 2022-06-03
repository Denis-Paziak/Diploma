from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name="home"),
    path('about', views.about, name="about"),
    path('partners', views.partners, name="partners"),
    path('profession', views.profession, name="profession")
]
