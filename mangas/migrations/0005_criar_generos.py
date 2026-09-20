from django.db import migrations


def criar_generos(apps, schema_editor):
    Genero = apps.get_model("mangas", "Genero")

    generos = [
        "Ação",
        "Aventura",
        "Ficção Científica",
        "Romance",
        "Comédia",
        "Drama",
        "Fantasia",
        "Fantasmas",
        "Aliens",
        "Mistério",
        "Militar",
        "Magia",
        "Monstros",
        "Isekai",
        "Reencarnação",
        "Esporte",
        "Escolar",
        "Slice of Life",
        "Sobrenatural",
        "Demônios",
        "Horror",
        "Terror",
    ]

    for nome in generos:
        Genero.objects.get_or_create(nome=nome)


class Migration(migrations.Migration):

    dependencies = [
        ("mangas", "0004_rename_genero_manga_generos"),
    ]

    operations = [
        migrations.RunPython(criar_generos),
    ]