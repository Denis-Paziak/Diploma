from django.shortcuts import render
from .models import Article

def allNews(request):
    article = Article.objects.all()
    data = {"article": article}
    return render(request, 'news/news.html',data)


def showNews(request, idNews):
    article = Article.objects.filter(id=idNews)
    data = {"article": article[0]}
    return render(request, 'news/showNews.html',data)
