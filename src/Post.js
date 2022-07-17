import Icone from "./Icone";

export default function Post (props){
    return(
        <div className="post">
              <div className="topo">
                <div className="usuario">
                  <img src={props.url} />
                  {props.pagina}
                </div>
                <div className="acoes">
                  <Icone name="ellipsis-horizontal" />
                </div>
              </div>

              <div className="conteudo">
                <img src={props.imagemPost}/>
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
                  <img src={props.ulrCurtidas} />
                  <div className="texto">
                    Curtido por <strong>{props.curtiu}</strong> e <strong>outras {props.quantidadeCurtidas} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>

    );
}