function MangaItem({ manga, onDelete }) {
    const handleDelete = () => {
        const confirmar = window.confirm(
            `Deseja realmente excluir"${manga.titulo}"?`
        );

        if (confirmar) {
            onDelete(manga.id);
        }
    };
    return (
        <div>
            <h3>{manga.titulo}</h3>
            <p>
                <strong>Autor:</strong> {manga.autor}
            </p>
            <p>
                <strong>Gênero</strong> {manga.genero}
            </p>
            <p>
                <strong>Status:</strong> {" "}
                {manga.concluido ? "✅ Concluído": "📖 Em andamento"}
            </p>

            <button onClick={handleDelete}>
                Excluir
            </button>
            <hr />
        </div>
    );
}

export default MangaItem;