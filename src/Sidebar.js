import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";



export default function Sidebar(){

    return (
        <div className="sidebar">
          <Usuario />
        <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
          <Sugestoes url="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você"/>
          <Sugestoes url="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você"/>
          <Sugestoes url="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram"/>
          <Sugestoes url="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você"/>
          <Sugestoes url="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você"/>
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