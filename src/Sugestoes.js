export default function Sugestoes(props){

    return (
        
        <div className="sugestao">
          <div className="usuario">
            <img src={props.url} />
            <div className="texto">
              <div className="nome">{props.nome}</div>
              <div className="razao">{props.razao}</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>

      
    );
}