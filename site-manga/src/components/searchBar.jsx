function SearchBar({ pesquisa, setPesquisa }) {
    return (
        <div className="barra-pesquisa">

            <input
                id="pesquisa"
                type="text"
                value={pesquisa}
                onChange={(event) => setPesquisa(event.target.value)}
                placeholder="🔍 Pesquisar mangá por título..."
            />

        </div>
    );
}

export default SearchBar;