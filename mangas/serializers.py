from rest_framework import serializers
from .models import Manga, Genero


class GeneroSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genero
        fields = ['id', 'nome']


class MangaSerializer(serializers.ModelSerializer):

    generos = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Genero.objects.all()
    )

    class Meta:
        model = Manga
        fields = '__all__'