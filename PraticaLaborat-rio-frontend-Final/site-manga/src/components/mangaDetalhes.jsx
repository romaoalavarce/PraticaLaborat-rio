function MangaDetalhes({ manga, generos = [], onClose }) {
    if (!manga) return null;

    const nomesGeneros = (manga.generos || [])
        .map((idGenero) => {
            const generoEncontrado = generos.find(
                (genero) =>
                    Number(genero.id) === Number(idGenero)
            );

            return generoEncontrado
                ? generoEncontrado.nome
                : null;
        })
        .filter(Boolean);

    const textoGeneros =
        nomesGeneros.length > 0
            ? nomesGeneros.join(", ")
            : "Não informado";

    return (
        <div
            className="modal-detalhes-fundo"
            onClick={onClose}
        >
            <div
                className="modal-detalhes"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="fechar-detalhes"
                    onClick={onClose}
                >
                    ×
                </button>

                <div className="detalhes-capa">
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

                <div className="detalhes-conteudo">

                    <span className="destaque-label">
                        ✦ Informações do mangá
                    </span>

                    <h2>{manga.titulo}</h2>

                    <p>
                        <strong>Autor:</strong>{" "}
                        {manga.autor || "Não informado"}
                    </p>

                    <p>
                        <strong>Artista:</strong>{" "}
                        {manga.artista || "Não informado"}
                    </p>

                    <p>
                        <strong>Gêneros:</strong>{" "}
                        {textoGeneros}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        {manga.concluido
                            ? "✓ Concluído"
                            : "● Em andamento"}
                    </p>

                    {manga.nota && (
                        <p>
                            <strong>Nota:</strong>{" "}
                            ⭐ {manga.nota}
                        </p>
                    )}

                    <div className="detalhes-descricao">
                        <h3>Descrição</h3>

                        <p>
                            {manga.descricao ||
                                "Sem descrição disponível."}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MangaDetalhes;