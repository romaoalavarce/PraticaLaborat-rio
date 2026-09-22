function MangaDetalhes({ manga, onClose }) {
if (!manga) return null;


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
                    <strong>Gênero:</strong>{" "}
                    {manga.genero || "Não informado"}
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
