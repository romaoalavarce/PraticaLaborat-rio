from django.contrib import admin

# Register your models here.

from .models import Manga, Genero

admin.site.register(Manga)
admin.site.register(Genero)