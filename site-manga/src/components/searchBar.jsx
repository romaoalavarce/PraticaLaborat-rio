function SearchBar({ pesquisa, setPesquisa }) {
  return (
    <div>
      <label htmlFor="pesquisa">
        Pesquisar mangá:
      </label>

      <input
        id="pesquisa"
        type="text"
        value={pesquisa}
        onChange={(event) => setPesquisa(event.target.value)}
        placeholder="Digite o título do mangá"
      />
    </div>
  );
}

export default SearchBar;

