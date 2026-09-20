function MangaItem({ manga, onDelete }) {
    const handleDelete = () => {
        const confirmar = window.confirm(
            `Deseja realmente excluir "${manga.titulo}"?`
        );

        if (confirmar) {
            onDelete(manga.id);
        }
    };
    return (
        <div className="manga-card">
            <div className="manga-capa">
                {manga.capa ?(
                    <img src={manga.capa} alt={`Capa de ${manga.titulo}`} />
                ): (
                    <div className="capa-padrao">📖</div>
                )}
            </div>

            <div className="manga-conteudo">
                <h3>{manga.titulo}</h3>

                <p><strong>Autor:</strong> {manga.autor}</p>
                <p><strong>Gênero:</strong> {manga.genero}</p>
                <p><strong>Artista:</strong> {manga.artista}</p>
                <span className={manga.concluido ? "concluido" : "em-andamento"}>
                    {manga.concluido
                        ? "✓ Concluído"
                        : "● Em andamento"}
                </span>

                <div className="manga-descricao">
                    {manga.descricao || "Sem descrição disponível."}
                </div>

                <button onClick={handleDelete} className="excluir-btn">
                    Excluir
                </button>
            </div>
        </div>
    );
}

export default MangaItem;