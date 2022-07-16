import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function () {

  return (
    <div className="corpo">
      <div className="esquerda">
        
        <div className="stories">
          
            <Stories url="assets/img/9gag.svg" pagina="9gag" />
            <Stories url="assets/img/meowed.svg" pagina="meowed" />
            <Stories url="assets/img/barked.svg" pagina="barked" />
            <Stories url="assets/img/nathanwpylestrangeplanet.svg" pagina="nathanwpylestrangeplanet" />
            <Stories url="assets/img/wawawicomics.svg" pagina="wawawicomics" />
            <Stories url="assets/img/respondeai.svg" pagina="respondeai" />
            <Stories url="assets/img/filomoderna.svg" pagina="filomoderna" />
            <Stories url="assets/img/memeriagourmet.svg" pagina="memeriagourmet" />
            <Stories url="assets/img/memeriagourmet.svg" pagina="memeriagourmet" />
           <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        </div>

       

        <Posts />
      </div>

      <Sidebar />
    </div>
  );
}