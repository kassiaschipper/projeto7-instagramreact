export default function Stories(props) {

    return (
        <div className="story">
            <div className="imagem">
                <img src={props.url} />
            </div>
            <div className="usuario">
                {props.pagina}
            </div>
        </div>
    );
}
