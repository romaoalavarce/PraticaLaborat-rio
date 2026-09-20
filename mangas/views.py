from rest_framework import generics
from rest_framework.filters import OrderingFilter

from .models import Manga, Genero
from .serializers import MangaSerializer, GeneroSerializer


class MangaListCreateView(generics.ListCreateAPIView):

    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

    filter_backends = [OrderingFilter]
    ordering_fields = ['titulo', 'autor', 'artista', 'nota']
    ordering = ['titulo']

    def get_queryset(self):
        queryset = Manga.objects.all()

        titulo = self.request.query_params.get('titulo')

        if titulo:
            queryset = queryset.filter(
                titulo__icontains=titulo
            )

        return queryset


class MangaDeleteView(generics.DestroyAPIView):

    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

class GeneroListView(generics.ListAPIView):

    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer