from django.urls import path
from . import views

urlpatterns = [
    path('', views.select_schedule, name="select_schedule"),
    path('/show', views.show_schedule, name="show_schedule")
]
