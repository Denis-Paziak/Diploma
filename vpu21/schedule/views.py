from django.shortcuts import render
from .models import *

def select_schedule(requare):
    return render(requare,'schedule/select_schedule.html')

def show_schedule(requare):

    if (requare.POST["data"]):
        data_str = requare.POST["data"].split("|")
        data_group = data_str[1]
        data_day = data_str[2]

        if (data_day == "Понеділок"):
            data = Monday.objects.all().filter(group=data_group)
        elif (data_day == "Вівторок"):
            data = Tuesday.objects.all().filter(group=data_group)
        elif (data_day == "Середа"):
            data = Wednesday.objects.all().filter(group=data_group)
        elif (data_day == "Четвер"):
            data = Thursday.objects.all().filter(group=data_group)
        elif (data_day == "П'ятниця"):
            data = Friday.objects.all().filter(group=data_group)

        for el in data:
            data_lessons = el.lessons

        split_lessons = data_lessons.split("|")
        lessons = {"lessons": split_lessons}

    return render(requare, 'schedule/show_schedule.html',lessons)
