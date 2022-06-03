from django.shortcuts import render
from news.models import Article

def index(request):
    article = Article.objects.all()
    count = 0
    arr_article = []
    for el in article:
        if(count < 6):
            arr_article.append(el)
            count = count + 1

    data = {"article": arr_article}
    return render(request, "home/index.html",data)

def about(request):
    return render(request,'page/about_school.html')

def partners(request):
    return render(request,'page/partners.html')

def profession(request):
    return render(request,'page/profession.html')
