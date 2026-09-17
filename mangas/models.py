from django.db import models


class Manga(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.CharField(max_length=100)
    artista = models.CharField(max_length=100)
    genero = models.CharField(max_length=50)
    concluido = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo