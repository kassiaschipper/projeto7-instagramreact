import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";



export default function Sidebar(){

    return (
        <div className="sidebar">
          <Usuario url="assets/img/catanacomics.svg" nomePagina="catanacomics" nome="Catana"/>
        <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
          <Sugestoes />
        </div>
       
          <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}