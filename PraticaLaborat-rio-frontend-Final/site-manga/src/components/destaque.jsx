import { useState } from "react";
import MangaDetalhes from "./mangaDetalhes";

function Destaque({ mangas = [], generos = [] }) {

    const [indice, setIndice] = useState(0);
    const [mangaSelecionado, setMangaSelecionado] = useState(null);

    const top5 = mangas.slice(0, 5);

    if (top5.length === 0) {
        return (
            <section className="destaque-vazio">
                <div>
                    <h2>Nenhum mangá em destaque</h2>
                    <p>Cadastre um para aparecer aqui</p>
                </div>
            </section>
        );
    }

    const manga = top5[indice];

    // Converte os IDs dos gêneros em nomes
    const nomesGeneros = (manga.generos || [])
        .map((idGenero) => {
            const generoEncontrado = generos.find(
                (genero) => Number(genero.id) === Number(idGenero)
            );

            return generoEncontrado ? generoEncontrado.nome : null;
        })
        .filter(Boolean);

    const textoGeneros =
        nomesGeneros.length > 0
            ? nomesGeneros.join(", ")
            : "Não informado";

    // Limita descrição
    const limiteDescricao = 150;

    const descricao = manga.descricao || "Sem descrição disponível.";

    const descricaoLimitada =
        descricao.length > limiteDescricao
            ? descricao.substring(0, limiteDescricao)
            : descricao;

    const temDescricaoGrande = descricao.length > limiteDescricao;

    const proximo = () => {
        setIndice((indiceAtual) =>
            indiceAtual === top5.length - 1
                ? 0
                : indiceAtual + 1
        );
    };

    const anterior = () => {
        setIndice((indiceAtual) =>
            indiceAtual === 0
                ? top5.length - 1
                : indiceAtual - 1
        );
    };

    return (
        <>
            <section className="destaque">

                <button
                    className="destaque-seta destaque-seta-esquerda"
                    onClick={anterior}
                    aria-label="Mangá anterior"
                >
                    ‹
                </button>

                <div className="destaque-conteudo">

                    <span className="destaque-label">
                        ✦ Mangá em destaque
                    </span>

                    <h2>{manga.titulo}</h2>

                    <p className="destaque-info">
                        {manga.autor || "Autor não informado"}
                        {" • "}
                        {textoGeneros}
                    </p>

                    <p className="destaque-descricao">
                        {descricaoLimitada}

                        {temDescricaoGrande && (
                            <span
                                className="ler-mais"
                                onClick={() =>
                                    setMangaSelecionado(manga)
                                }
                            >
                                {" "}ler mais...
                            </span>
                        )}
                    </p>

                    <div className="destaque-status">

                        <span>
                            {manga.concluido
                                ? "✓ Concluído"
                                : "● Em andamento"}
                        </span>

                        {manga.nota && (
                            <span>
                                ⭐ {manga.nota}
                            </span>
                        )}

                    </div>

                    <div className="destaque-indicadores">
                        {top5.map((_, index) => (
                            <button
                                key={index}
                                className={
                                    index === indice
                                        ? "indicador ativo"
                                        : "indicador"
                                }
                                onClick={() => setIndice(index)}
                                aria-label={`Ir para o mangá ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>

                <div className="destaque-imagem">

                    {manga.capa ? (
                        <img
                            src={manga.capa}
                            alt={`Capa de ${manga.titulo}`}
                        />
                    ) : (
                        <div className="destaque-capa-padrao">
                            📖
                        </div>
                    )}

                </div>

                <button
                    className="destaque-seta destaque-seta-direita"
                    onClick={proximo}
                    aria-label="Próximo mangá"
                >
                    ›
                </button>

            </section>

            {mangaSelecionado && (
                <MangaDetalhes
                    manga={mangaSelecionado}
                    generos={generos}
                    onClose={() => setMangaSelecionado(null)}
                />
            )}
        </>
    );
}

export default Destaque;