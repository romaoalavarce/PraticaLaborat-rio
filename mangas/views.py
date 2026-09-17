from django.shortcuts import render
from rest_framework import generics
from .models import Manga
from .serializers import MangaSerializer


class MangaListCreateView(generics.ListCreateAPIView):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer


class MangaDeleteView(generics.DestroyAPIView):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer