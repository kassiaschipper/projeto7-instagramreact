import Icone from "./Icone";

export default function Post() {
    const postagem = [
        { url: "assets/img/meowed.svg", pagina: "meowed", imagemPost: "assets/img/gato-telefone.svg", ulrCurtidas: "assets/img/respondeai.svg", curtiu: "respondeai", quantidadeCurtidas: "101.523" },
        { url: "assets/img/barked.svg", pagina: "barked", imagemPost: "assets/img/dog.svg", ulrCurtidas: "assets/img/adorable_animals.svg", curtiu: "adorable_animals", quantidadeCurtidas: "99.159" }

    ];


    return (
        <>
        
       { postagem.map(value => (
                <div className="post">
                    <div className="topo">
                        <div className="usuario">
                            <img src={value.url} />
                            {value.pagina}
                        </div>
                        <div className="acoes">
                            <Icone name="ellipsis-horizontal" />
                        </div>
                    </div>

                    <div className="conteudo">
                        <img src={value.imagemPost} />
                    </div>

                    <div className="fundo">
                        <div className="acoes">
                            <div>
                                <Icone name="heart-outline" />
                                <Icone name="chatbubble-outline" />
                                <Icone name="paper-plane-outline" />
                            </div>
                            <div>
                                <Icone name="bookmark-outline" />
                            </div>
                        </div>

                        <div className="curtidas">
                            <img src={value.ulrCurtidas} />
                            <div className="texto">
                                Curtido por <strong>{value.curtiu}</strong> e <strong>outras {value.quantidadeCurtidas} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>

       ))
        }
        </>

    );
}