from django.urls import path

from .views import MangaListCreateView, MangaDeleteView, GeneroListView


urlpatterns = [
    path('mangas/', MangaListCreateView.as_view()),
    path('mangas/<int:pk>/', MangaDeleteView.as_view()),
]

urlpatterns = [
    path('mangas/', MangaListCreateView.as_view()),
    path('mangas/<int:pk>/', MangaDeleteView.as_view()),
    path('generos/', GeneroListView.as_view()),
]