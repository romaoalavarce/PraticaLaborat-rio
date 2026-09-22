function ConfirmarExclusao({ manga, onConfirmar, onCancelar }) {

    if (!manga) {
        return null;
    }

    return (
        <div
            className="confirmacao-fundo"
            onClick={onCancelar}
        >

            <div
                className="confirmacao-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="confirmacao-icone">
                    🗑️
                </div>

                <h2>Excluir mangá?</h2>

                <p>
                    Tem certeza que deseja excluir
                    <strong> "{manga.titulo}"</strong>?
                </p>

                <span className="confirmacao-aviso">
                    Essa ação não poderá ser desfeita.
                </span>

                <div className="confirmacao-acoes">

                    <button
                        className="botao-cancelar"
                        onClick={onCancelar}
                    >
                        Cancelar
                    </button>

                    <button
                        className="botao-confirmar-exclusao"
                        onClick={onConfirmar}
                    >
                        🗑️ Excluir
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ConfirmarExclusao;