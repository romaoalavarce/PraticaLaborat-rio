function Filtro({ genero, setGenero, status, setStatus, generos }) {
    return (
        <div className="filtros">

            <div className="filtro-grupo">
                <label>Gênero: </label>

                <select
                    value={genero}
                    onChange={(evento) => setGenero(evento.target.value)}
                >
                    <option value="">Todos</option>

                    {generos.map((item) => (
                        <option key={item.id} value={item.nome}>
                            {item.nome}
                        </option>
                    ))}
                </select>
            </div>


            <div className="filtro-grupo">
                <label>Status: </label>

                <select
                    value={status}
                    onChange={(evento) => setStatus(evento.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="concluido">Concluído</option>
                    <option value="andamento">Em andamento</option>
                </select>
            </div>

        </div>
    );
}

export default Filtro;