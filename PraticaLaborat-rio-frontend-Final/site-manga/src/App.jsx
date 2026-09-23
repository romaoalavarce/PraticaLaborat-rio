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
    const [ordenacao, setOrdenacao] = useState("tituloAsc")
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [generos, setGeneros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState([]);


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/mangas/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar os mangás.");
                }
                return response.json();
            })
            .then((dados) => {
                setMangas(dados);
                setErro("");
            })
            .catch((error) => {
                console.error("Erro ao buscar mangás:", error);
                setErro("Não foi possível carregar os mangás. Por favor, tente novamente mais tarde.");
            })
            .finally(() => {
                setCarregando(false);
            })
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

        return (correspondePesquisa && correspondeGenero && correspondeStatus);
    })
    .sort((a, b) => {
        if (ordenacao === "tituloAsc") {
            return a.titulo.localeCompare(b.titulo, "pt-BR", { sensitivity: "base" });
        }
        if (ordenacao === "tituloDesc") {
            return b.titulo.localeCompare(a.titulo, "pt-BR", { sensitivity: "base" });
        }
        if (ordenacao === "notaDesc") {
            return Number(b.nota || 0) - Number(a.nota || 0);
        }
        if (ordenacao === "notaAsc") {
            return Number(a.nota || 0) - Number(b.nota || 0);
        }
        return 0;
    });

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

    {carregando ? (

        <div className="mensagem-carregando">
            <div className="loading-spinner"></div>
            <p>Carregando...</p>
        </div>

    ) : erro ? (
        <div className="mensagem-erro">
            <div className="erro-icone">
                ⚠️
            </div>
            <h2>Ops! Algo deu errado.</h2>
            <p>{erro}</p>
        </div>

    ) : (
        <>
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
                <button
                    className="botao-novo"
                    onClick={() => setMostrarFormulario(true)}
                >
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
            <div className="ordenacao">
                <label htmlFor="ordenacao">
                    Ordenar por:
                </label>

                <select
                    id="ordenacao"
                    value={ordenacao}
                    onChange={(e) => setOrdenacao(e.target.value)}
                >
                    <option value="tituloAsc">
                        Título A → Z
                    </option>

                    <option value="tituloDesc">
                        Título Z → A
                    </option>

                    <option value="notaDesc">
                        Nota maior → menor
                    </option>

                    <option value="notaAsc">
                        Nota menor → maior
                    </option>
                </select>
            </div>
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
                        <button
                            className="modal-fechar"
                            onClick={() => setMostrarFormulario(false)}
                        >
                            X
                        </button>
                        <MangaForm
                            onMangaCriado={(novoManga) => {
                                adicionarManga(novoManga);
                                setMostrarFormulario(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    )}
</main> 

        </div>
    );
}

export default App;