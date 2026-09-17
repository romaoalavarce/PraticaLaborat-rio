import React from "react";
import { useState } from "react";

function MangaForm({ onMangaCriado }) {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [artista, setArtista] = useState('');
    const [concluido, setConcluido] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        if (!titulo || !autor || !genero) {
            setMensagem('Preencha todos os campos.');
            return;
        }

        const novoManga = {
            titulo: titulo,
            autor: autor,
            genero: genero,
            artista: artista,
            concluido: concluido,
        };
        try {
            const response = await fetch("http://127.0.0.1:8000/api/mangas/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoManga),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar mangá.");
            }
            const mangaCadastrado = await response.json();

            onMangaCriado(mangaCadastrado);

            setTitulo("");
            setAutor("");
            setGenero("");
            setArtista("");
            setConcluido(false);
            setMensagem("Mangá cadastrado com sucesso!");
        } catch (error) {
            console.error(error);
            setMensagem('Não foi possível cadastrar o mangá.');
        }
    };
    return (
        <div>
            <h2>Cadastrar Mangá</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type='text' value={titulo} onChange={(evento) => setTitulo(evento.target.value)} placeholder='Digite o título'></input>
                </div>
                <div>
                    <label>Autor:</label>
                    <input type='text' value={autor} onChange={(evento) => setAutor(evento.target.value)} placeholder='Digite o nome do Autor'></input>
                </div>
                <div>
                    <label>Gênero:</label>
                    <input type='text' value={genero} onChange={(evento) => setGenero(evento.target.value)} placeholder='Digite o gênero'></input>
                </div>
                <div>
                    <label>Artista:</label>
                    <input type='text' value={artista} onChange={(evento) => setArtista(evento.target.value)} placeholder='Digite o nome do Artista'></input>
                </div>
                <div>
                    <label>
                        <input type='checkbox' checked={concluido} onChange={(evento) => setConcluido(evento.target.value)}></input>
                        {" "}Concluído
                    </label>
                </div>
                <button type='submit'>
                    Cadastrar
                </button>
            </form>

            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}

export default mangaForm;