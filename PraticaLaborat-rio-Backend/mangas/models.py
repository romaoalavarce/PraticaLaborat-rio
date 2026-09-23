from django.db import models


class Genero(models.Model):
    nome = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nome


class Manga(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.CharField(max_length=100)
    artista = models.CharField(max_length=100)
    generos = models.ManyToManyField(Genero, blank=True)
    descricao = models.TextField(blank=True)
    nota = models.DecimalField(
        max_digits=3,
        decimal_places=1,
        null=True,
        blank=True
    )
    capa = models.URLField(blank=True)
    concluido = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo