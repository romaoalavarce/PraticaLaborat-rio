function Estatistica ({ mangas }) {
    const totalMangas = mangas.length;

    const concluidos = mangas.filter((manga) => manga.concluido).length;
    const emAndamento = mangas.filter((manga) => !manga.concluido).length;

    return (
        <section className="estatisticas">
            <div className="estatistica-card">
                <span className="estatistica-icone">📚</span>
                <div>
                    <strong>{totalMangas}</strong>
                    <p>Total de Mangás</p>
                </div>
            </div>

            <div className="estatistica-card">
                <span className="estatistica-icone">✅</span>
                <div>
                    <strong>{concluidos}</strong>
                    <p>Concluídos</p>
                </div>
            </div>
            <div className="estatistica-card">
                <span className="estatistica-icone">⏳</span>
                <div>
                    <strong>{emAndamento}</strong>
                    <p>Em Andamento</p>
                </div>
            </div>
        </section>
    );
}

export default Estatistica;