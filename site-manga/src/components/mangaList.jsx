import MangaItem from "./mangaItem";

function MangaList({ mangas, onDelete }) {
  return (
    <section className="lista-mangas">
      <div className="titulo-lista">
        <h2>Todos os mangás</h2>
        <span>{mangas.length} encontrados</span>
      </div>

      {mangas.length > 0 ? (
        <div className="manga-grid">
          {mangas.map((manga) => (
            <MangaItem key={manga.id} manga={manga} onDelete={onDelete} />
          ))}
        </div>
      ) : (
        <div className="lista-vazia">
          <span>📚</span>
          <h3>Nenhum mangá encontrado</h3>
          <p>Cadastre um novo mangá para começar.</p>
        </div>
        
      )}
    </section>
  );
}

export default MangaList;

