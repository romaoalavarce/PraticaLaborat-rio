from django.urls import path
from .views import MangaListCreateView, MangaDeleteView

urlpatterns = [
    path('mangas/', MangaListCreateView.as_view()),
    path('mangas/<int:pk>/', MangaDeleteView.as_view()),
]