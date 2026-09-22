import { useState, useEffect } from "react";
import "./App.css";

import MangaForm from "./components/mangaForm";
import MangaList from "./components/mangaList";
import SearchBar from "./components/searchBar";
import Destaque from "./components/destaque";
import Estatistica from "./components/estatisticas";
import Filtro from "./components/filtros";

function App() {

    const [mangas, setMangas] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [genero, setGenero] = useState("");
    const [status, setStatus] = useState("");
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [generos, setGeneros] = useState([]);


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/mangas/")
            .then((response) => response.json())
            .then((dados) => {
                setMangas(dados);
            })
            .catch((error) => {
                console.error("Erro ao buscar mangás:", error);

            });
        fetch("http://127.0.0.1:8000/api/generos/")
            .then((response) => response.json())
            .then((dados) => {
                setGeneros(dados);
            })
            .catch((error) => {
                console.error("Erro ao buscar gêneros:", error);
            });
    }, []);

    const adicionarManga = (novoManga) => {
        setMangas((mangasAtuais) => [
            ...mangasAtuais,
            novoManga
        ]);
    };

    const excluirManga = async (id) => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api/mangas/${id}/`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao excluir mangá.");
            }

            setMangas((mangasAtuais) =>
                mangasAtuais.filter((manga) => manga.id !== id)
            );

        } catch (error) {
            console.error("Erro ao excluir:", error);
        }
    };

    const mangasFiltrados = mangas.filter((manga) => {
        const correspondePesquisa = manga.titulo.toLowerCase().includes(pesquisa.toLowerCase());

       const correspondeGenero = genero === "" || manga.generos.some((idGenero) => {
            const generoEncontrado = generos.find((g) => g.id === idGenero);
            return generoEncontrado?.nome === genero;
       })

        const correspondeStatus = status === "" || (status === "concluido" && manga.concluido) || (status === "andamento" && !manga.concluido);

        return correspondePesquisa && correspondeGenero && correspondeStatus;
    })


    return (
        <div className="app">

            <header className="cabecalho">

                <div className="cabecalho-conteudo">

                    <div className="logo">

                        <div className="logo-icon">
                            
                        </div>

                        <div>
                            <h1>
                                Manga<span>Hub</span>
                            </h1>

                            <p className="subtitulo">
                                Sua biblioteca de mangás
                            </p>
                        </div>

                    </div>

                </div>

            </header>

            <main>

                <Destaque
                    mangas={mangas}
                    generos={generos}
                />

                <Estatistica
                    mangas={mangas}
                />

                <section className="barra-acoes">

                    <SearchBar
                        pesquisa={pesquisa}
                        setPesquisa={setPesquisa}
                    />

                    <button className="botao-novo" onClick={() => setMostrarFormulario(true)}>
                        + Novo Mangá
                    </button>

                </section>

                <Filtro
                    genero={genero}
                    setGenero={setGenero}
                    status={status}
                    setStatus={setStatus}
                    generos={generos}
                />

                <section className="informacoes">

                    <span>
                        📚 {mangas.length} mangás cadastrados
                    </span>

                </section>

                <MangaList
                    mangas={mangasFiltrados}
                    onDelete={excluirManga}
                    generos={generos}
                />

                {mostrarFormulario && (
                    <div className="modal-fundo">
                        <div className="modal">
                            <button className="modal-fechar" onClick={() => setMostrarFormulario(false)}>
                                X
                            </button>

                            <MangaForm onMangaCriado={(novoManga) => {
                                adicionarManga(novoManga);
                                setMostrarFormulario(false);
                            }}
                            />
                        </div>
                    </div>
                )}

            </main>

        </div>
    );
}

export default App;