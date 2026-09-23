import { useEffect, useState } from "react";

function MangaForm({ onMangaCriado }) {

    const [titulo, setTitulo] = useState("");
    const [erroTitulo, setErroTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [artista, setArtista] = useState("");
    const [generos, setGeneros] = useState([]);
    const [generosSelecionados, setGenerosSelecionados] = useState([]);
    const [concluido, setConcluido] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [nota, setNota] = useState("");
    const [capa, setCapa] = useState("");

    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/generos/")
            .then((response) => response.json())
            .then((dados) => {
                setGeneros(dados);
            })
            .catch((error) => {
                console.error("Erro ao buscar gêneros:", error);
            });

    }, []);

    const handleGenero = (evento) => {

        const idGenero = Number(evento.target.value);

        if (evento.target.checked) {

            setGenerosSelecionados((atuais) => [
                ...atuais,
                idGenero
            ]);

        } else {

            setGenerosSelecionados((atuais) =>
                atuais.filter((id) => id !== idGenero)
            );
        }
    };

    const handleSubmit = async (evento) => {

        evento.preventDefault();
        if (!titulo.trim()) {
            setErroTitulo("O título do mangá é obrigatório.");
            return;
        }

        setErroTitulo("");

        if (!titulo || !autor || generosSelecionados.length === 0) {
            setMensagem("Preencha o título, autor e pelo menos um gênero.");
            return;
        }

        const novoManga = {
            titulo: titulo,
            autor: autor,
            artista: artista,
            generos: generosSelecionados,
            concluido: concluido,
            descricao: descricao,
            nota: nota || null,
            capa: capa
        };

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/api/mangas/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(novoManga),
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao cadastrar mangá.");
            }

            const mangaCadastrado = await response.json();

            onMangaCriado(mangaCadastrado);

            setTitulo("");
            setAutor("");
            setArtista("");
            setGenerosSelecionados([]);
            setConcluido(false);
            setDescricao("");
            setNota("");
            setCapa("");
            setMensagem("Mangá cadastrado com sucesso!");

        } catch (error) {

            console.error(error);
            setMensagem("Não foi possível cadastrar o mangá.");
        }
    };

   return (
            <div className="manga-form">
                <div className="form-titulo">
                    <h2>Cadastrar Mangá</h2>
                    <p>Adicione um novo mangá à sua biblioteca</p>
                </div>

                    <form onSubmit={handleSubmit}>

                <div>
                    <label>Título:</label>

                    <input
                        type="text"
                        value={titulo}
                        onChange={(evento) => {
                            setTitulo(evento.target.value);

                            if (evento.target.value.trim()) {
                                setErroTitulo("");
                            }
                        }}
                        placeholder="Digite o título do mangá"
                    />

                    {erroTitulo && (
                        <span className="erro-campo">
                            {erroTitulo}
                        </span>
                    )}
                </div>
                <div>
                    <label>Autor:</label>

                    <input
                        type="text"
                        value={autor}
                        onChange={(evento) => setAutor(evento.target.value)}
                        placeholder="Digite o nome do Autor"
                    />
                </div>


                <div>
                    <label>Artista:</label>

                    <input
                        type="text"
                        value={artista}
                        onChange={(evento) => setArtista(evento.target.value)}
                        placeholder="Digite o nome do Artista"
                    />
                </div>


                <div>
                    <label>Gêneros:</label>

                    <div className="lista-generos">

                        {generos.map((genero) => (

                            <label key={genero.id}>

                                <input
                                    type="checkbox"
                                    value={genero.id}
                                    checked={generosSelecionados.includes(genero.id)}
                                    onChange={handleGenero}
                                />

                                {" "}

                                {genero.nome}

                            </label>

                        ))}

                    </div>
                </div>


                <div>
                    <label>Descrição:</label>

                    <textarea
                        value={descricao}
                        onChange={(evento) => setDescricao(evento.target.value)}
                        placeholder="Digite a descrição"
                    />
                </div>


                <div>
                    <label>Nota:</label>

                    <input
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        value={nota}
                        onChange={(evento) => setNota(evento.target.value)}
                        placeholder="Ex: 9.5"
                    />
                </div>


                <div>
                    <label>Capa:</label>

                    <input
                        type="text"
                        value={capa}
                        onChange={(evento) => setCapa(evento.target.value)}
                        placeholder="URL da capa"
                    />
                </div>


                <div>
                    <label>

                        <input
                            type="checkbox"
                            checked={concluido}
                            onChange={(evento) => setConcluido(evento.target.checked)}
                        />

                        {" "}Concluído

                    </label>
                </div>


                <button type="submit">
                    Cadastrar
                </button>

            </form>

            {mensagem && <p>{mensagem}</p>}

        </div>
    );
}

export default MangaForm;