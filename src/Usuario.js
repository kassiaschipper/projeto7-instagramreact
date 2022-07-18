export default function Usuario(props){
    return(
        <div className="usuario">
            <img src={props.url}/>
            <div className="texto">
              <strong>{props.nomePagina}</strong>
              {props.nome}
            </div>
        </div>
    );
}