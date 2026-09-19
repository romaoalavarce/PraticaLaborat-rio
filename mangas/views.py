from django.shortcuts import render
from rest_framework import generics
from .models import Manga
from .serializers import MangaSerializer
from rest_framework.filters import OrderingFilter


from rest_framework.filters import OrderingFilter

class MangaListCreateView(generics.ListCreateAPIView):
    serializer_class = MangaSerializer
    filter_backends = [OrderingFilter]
    ordering_fields = ['titulo', 'autor', 'artista', 'genero']

    def get_queryset(self):
        queryset = Manga.objects.all()
        titulo = self.request.query_params.get('titulo')

        if titulo:
            queryset = queryset.filter(titulo__icontains=titulo)

        return queryset

class MangaDeleteView(generics.DestroyAPIView):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer