import mangaItem from "./mangaItem";

function MangaList({ mangas, onDelete }) {
  return (
    <div>
      <h2>Lista de Mangás</h2>

      {mangas.map((manga) => (
        <MangaItem
          key={manga.id}
          manga={manga}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default MangaList;

