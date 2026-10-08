from django.urls import path

from .views import MangaListCreateView, GeneroListView, MangaDetailView


urlpatterns = [
    path('mangas/', MangaListCreateView.as_view()),
    path('mangas/<int:pk>/', MangaDetailView.as_view()),
    path('generos/', GeneroListView.as_view()),
]