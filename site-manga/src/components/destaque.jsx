function Destaque({ manga }) {
    if (!manga) {
        return (
            <section className="destaque-vazio">
                <div>
                    <h2>Nenhum mangá em destaque</h2>
                    <p>Cadastre um para aparecer aqui</p>
                </div>
            </section>
        );
    }

    return (
        <section className="destaque">
            <div className="destaque-conteudo">
                <span className="destaque-label">✦ Mangá em destaque</span>
                <h2>{manga.titulo}</h2>
                <p className="destaque-info">{manga.autor} • {manga.genero}</p>
                <p className="destaque-descricao">{manga.descricao || "Sem descrição disponível."}</p>
                <div className="destaque-status">
                    <span>{manga.concluido
                            ? "✓ Concluído"
                            : "● Em andamento"}</span>

                {manga.nota && (
                    <span>⭐ {manga.nota}</span>
                )}
                </div>
            </div>

            <div className="destaque-imagem">
                {manga.capa ? (
                    <img src={manga.capa} alt={`Capa de ${manga.titulo}`} />
                ) : (
                    <div className="destaque-capa-padrao">📖</div>
                )}
            </div>
        </section>
    );
}

export default Destaque;