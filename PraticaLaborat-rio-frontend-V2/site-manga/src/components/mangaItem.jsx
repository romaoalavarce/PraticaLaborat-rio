import { useState } from "react";
import MangaDetalhes from "./mangaDetalhes";
import ConfirmarExclusao from "./confirmarExclusao";

function MangaItem({ manga, onDelete, generos = [] }) {

    const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
    const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

    const handleDelete = () => {
        setMostrarConfirmacao(true);
    };

    const confirmarExclusao = () => {
        onDelete(manga.id);
        setMostrarConfirmacao(false);
    };

    const cancelarExclusao = () => {
        setMostrarConfirmacao(false);
    };


    // Converte os IDs dos gêneros nos nomes
    const nomesGeneros = (manga.generos || [])
        .map((idGenero) => {
            const generoEncontrado = generos.find(
                (genero) => Number(genero.id) === Number(idGenero)
            );

            return generoEncontrado ? generoEncontrado.nome : null;
        })
        .filter(Boolean);

    const textoGeneros =
        nomesGeneros.length > 0
            ? nomesGeneros.join(", ")
            : "Não informado";

    // Limita a descrição
    const limiteDescricao = 150;

    const descricao = manga.descricao || "Sem descrição disponível.";

    const descricaoLimitada =
        descricao.length > limiteDescricao
            ? descricao.substring(0, limiteDescricao) + "..."
            : descricao;

    return (
        <>
            <div className="manga-card">

                <div className="manga-capa">
                    {manga.capa ? (
                        <img
                            src={manga.capa}
                            alt={`Capa de ${manga.titulo}`}
                        />
                    ) : (
                        <div className="capa-padrao">
                            📖
                        </div>
                    )}
                </div>

                <div className="manga-conteudo">

                    <h3
                        className="manga-titulo-clicavel"
                        onClick={() => setMostrarDetalhes(true)}
                        title="Clique para ver informações"
                    >
                        {manga.titulo}
                    </h3>

                    <p>
                        <strong>Autor:</strong>{" "}
                        {manga.autor || "Não informado"}
                    </p>

                    <p>
                        <strong>Gênero:</strong>{" "}
                        {textoGeneros}
                    </p>

                    <p>
                        <strong>Artista:</strong>{" "}
                        {manga.artista || "Não informado"}
                    </p>

                    <span
                        className={
                            manga.concluido
                                ? "concluido"
                                : "em-andamento"
                        }
                    >
                        {manga.concluido
                            ? "✓ Concluído"
                            : "● Em andamento"}
                    </span>

                    <div className="manga-descricao">
                        {descricaoLimitada}
                    </div>

                    <button
                        onClick={handleDelete}
                        className="excluir-btn"
                    >
                        🗑️ Excluir
                    </button>

                </div>
            </div>

            {mostrarDetalhes && (
                <MangaDetalhes
                    manga={manga}
                    generos={generos}
                    onClose={() => setMostrarDetalhes(false)}
                />
            )}
            {mostrarConfirmacao && (
                <ConfirmarExclusao
                    manga={manga}
                    onConfirmar={confirmarExclusao}
                    onCancelar={cancelarExclusao}
                />
            )}
        </>
    );
}

export default MangaItem;