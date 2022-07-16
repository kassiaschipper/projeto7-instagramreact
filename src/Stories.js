export default function Stories (props){
  
    return(
      <div className="stories">
      <div className="story">
        <div className="imagem">
          <img src={props.url}/>
        </div>
        <div className="usuario">
          {props.pagina}
        </div>
      </div>
 
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
    );
  }
  